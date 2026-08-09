export default function SessionHeader({
  title,
  chapterTitle,
}) {
  return (
    <div className="border-b border-gray-100 px-6 py-5">
      <h1 className="text-lg font-bold text-gray-900">
        {title}
      </h1>

      {chapterTitle && (
        <p className="mt-1 text-sm text-gray-500">
          {chapterTitle}
        </p>
      )}
    </div>
  );
}