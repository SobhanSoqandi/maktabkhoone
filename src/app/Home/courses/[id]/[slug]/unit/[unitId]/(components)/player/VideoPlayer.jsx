
"use client";

import { useEffect, useRef, useState } from "react";
import "video.js/dist/video-js.css";



export default function VideoPlayer({
  playlistUrl,
  title,
  getToken,
  refreshToken,
  watermark,
}) {
  const holderRef = useRef(null);
const playerRef = useRef(null);
const watermarkRef = useRef(null);

const getTokenRef = useRef(getToken);
const refreshTokenRef = useRef(refreshToken);

const [error, setError] = useState("");

useEffect(() => {
  getTokenRef.current = getToken;
  refreshTokenRef.current = refreshToken;
}, [getToken, refreshToken]);

  useEffect(() => {
    if (!playlistUrl || !holderRef.current) return;

    let cancelled = false;
    let player;
    let watermarkTimer;
    let retries = 0;

    const initializePlayer = async () => {
      try {
        const { default: videojs } = await import("video.js");

        if (cancelled) return;

        const videoElement = document.createElement("video-js");

        videoElement.classList.add("vjs-big-play-centered");

        holderRef.current.appendChild(videoElement);

        player = videojs(videoElement, {
          controls: true,
          responsive: true,
          fluid: true,
          preload: "auto",
          language: "fa",
          playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
          controlBar: {
            pictureInPictureToggle: false,
          },
          html5: {
            vhs: {
              overrideNative: true,
            },
          },
        });

        playerRef.current = player;

        // اضافه کردن Authorization به درخواست‌های HLS
        player.on("xhr-hooks-ready", () => {
          const tech = player.tech({
            IWillNotUseThisInPlugins: true,
          });

          const vhs = tech?.vhs;

          if (!vhs) return;

          vhs.xhr.onRequest((options) => {
            const token = getTokenRef.current?.();

            if (token) {
              options.headers = {
                ...(options.headers || {}),
                Authorization: `Bearer ${token}`,
              };
            }

            return options;
          });
        });

        // مدیریت خطای درخواست‌ها
        let lastStatus = 0;

        player.on("xhr-hooks-ready", () => {
          const vhs = player.tech({
            IWillNotUseThisInPlugins: true,
          })?.vhs;

          if (!vhs) return;

          vhs.xhr.onResponse((request, error, response) => {
            const status =
              response?.statusCode || request?.status || 0;

            if (status >= 400) {
              lastStatus = status;
            }
          });
        });

        const source = {
          src: playlistUrl,
          type: "application/x-mpegURL",
        };

        player.on("error", async () => {
          if (cancelled) return;

          const status = lastStatus;

          if (
            status === 401 &&
            refreshTokenRef.current &&
            retries < 2
          ) {
            retries++;

            try {
              await refreshTokenRef.current();

              const currentTime = player.currentTime() || 0;

              lastStatus = 0;

              player.src(source);

              player.one("loadedmetadata", () => {
                player.currentTime(currentTime);
                player.play()?.catch(() => {});
              });

              return;
            } catch {
              setError("نشست شما منقضی شده است. دوباره وارد شوید.");
              return;
            }
          }

          if (status === 401) {
            setError("برای ادامه پخش، دوباره وارد حساب خود شوید.");
          } else if (status === 403) {
            setError("شما به این ویدیو دسترسی ندارید.");
          } else if (status === 404) {
            setError("ویدیو پیدا نشد یا هنوز آماده نشده است.");
          } else {
            setError("پخش ویدیو با خطا مواجه شد.");
          }
        });

        // واترمارک
        const watermarkElement = document.createElement("div");

        Object.assign(watermarkElement.style, {
          position: "absolute",
          color: "#fff",
          opacity: "0.4",
          fontSize: "13px",
          textShadow: "0 0 4px #000",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: "10",
          transition: "all 1s ease",
        });

        watermarkElement.textContent = watermark || "";

        player.el().appendChild(watermarkElement);

        watermarkRef.current = watermarkElement;

        const moveWatermark = () => {
          watermarkElement.style.top =
            8 + Math.random() * 75 + "%";

          watermarkElement.style.left =
            5 + Math.random() * 70 + "%";
        };

        if (watermark) {
          moveWatermark();
          watermarkTimer = setInterval(moveWatermark, 8000);
        }

        player.src(source);

      } catch (err) {
        console.error("Video player initialization failed:", err);

        if (!cancelled) {
          setError("راه‌اندازی پلیر ویدیو ناموفق بود.");
        }
      }
    };

    setError("");

    initializePlayer();

    return () => {
      cancelled = true;

      clearInterval(watermarkTimer);

      if (player && !player.isDisposed()) {
        player.dispose();
      }

      playerRef.current = null;
      watermarkRef.current = null;
    };
  }, [playlistUrl]);

  useEffect(() => {
    if (watermarkRef.current) {
      watermarkRef.current.textContent = watermark || "";
    }
  }, [watermark]);

  return (
    <div className="relative shadow-lg rounded-xl w-full aspect-video overflow-hidden">
  <div className="absolute inset-0 p-1">
    <div
      ref={holderRef}
      className="w-full h-full"
    />
  </div>

  {error && (
    <div className="z-20 absolute inset-0 flex flex-col justify-center items-center gap-3 bg-gray-950/95 px-6 text-white">
      <p>{error}</p>
      <button onClick={() => window.location.reload()}>
        تلاش مجدد
      </button>
    </div>
  )}
</div>
  );
}
