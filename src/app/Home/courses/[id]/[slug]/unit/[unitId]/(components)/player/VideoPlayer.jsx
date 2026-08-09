export default function VideoPlayer({ videoUrl }) {

  

  if (!videoUrl) {
    return (
      <div className="flex aspect-video w-full items-center justify-center bg-black text-sm text-gray-400">
        ویدئوی این جلسه در دسترس نیست.
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden bg-black">
      <video
        key={videoUrl}
        controls
        className="h-full w-full"
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        مرورگر شما از پخش این ویدیو پشتیبانی نمی‌کند.
      </video>
    </div>
  );
}