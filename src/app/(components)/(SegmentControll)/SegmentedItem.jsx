export default function SegmentedItem({
  item,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 rounded-xl p-2 text-center text-lg font-medium transition-all duration-300
        ${
          active
            ? "bg-white text-gray-900 shadow"
            : "text-gray-500 hover:text-gray-900"
        }
      `}
    >
      {item.label}
    </button>
  );
}