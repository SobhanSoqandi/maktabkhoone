export default function SessionFileItem({ file }) {
  return (
    <div className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-teal-50 text-teal-700">
          <i className="ti ti-paperclip" aria-hidden="true" />
        </span>
        <span className="text-sm text-gray-700">{file.label}</span>
      </div>

      <a
        href={file.downloadUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-50"
        aria-label={`دانلود ${file.label}`}
      >
        <i className="ti ti-download" aria-hidden="true" />
      </a>
    </div>
  );
}
