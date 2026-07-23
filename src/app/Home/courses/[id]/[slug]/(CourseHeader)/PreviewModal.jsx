export default function PreviewModal({
  title,
  video,
}) {
  return (
    <div className="w-[950px] max-w-[95vw] p-8">

      <h2 className="mb-6 text-2xl font-black">
        {title}
      </h2>

      <div className="overflow-hidden rounded-2xl">

        <iframe
          className="aspect-video w-full"
          src={video}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

      </div>

    </div>
  );
}