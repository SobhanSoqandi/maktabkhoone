import SessionFileItem from "./SessionFileItem";

export default function SessionFilesList({ downloadUrl }) {
  if (!downloadUrl) {
    return (
      <p className="text-sm text-gray-400">
        فایلی برای این جلسه ثبت نشده است.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <SessionFileItem
        file={{
          id: "video-download",
          label: "دانلود ویدیو جلسه",
          downloadUrl,
        }}
      />
    </div>
  );
}
