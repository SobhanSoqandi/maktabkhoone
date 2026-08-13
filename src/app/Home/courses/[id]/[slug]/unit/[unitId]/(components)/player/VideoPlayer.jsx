export default function VideoPlayer({ videoUrl }) {
  if (!videoUrl) {
    return (
      <div className="flex justify-center items-center bg-black w-full aspect-video text-gray-400 text-sm">
        ویدئوی این جلسه در دسترس نیست.
      </div>
    );
  }

  return (
    <div className="bg-black w-full aspect-video overflow-hidden">
      <video
        key={videoUrl}
        controls
        className="w-full h-full"
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        مرورگر شما از پخش این ویدیو پشتیبانی نمی‌کند.
      </video>
    </div>
  );
}
