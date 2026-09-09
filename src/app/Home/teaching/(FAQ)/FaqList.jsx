import FaqItem from './FaqItem';

export default function FaqList({ items }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <FaqItem key={item.id} {...item} />
      ))}
    </div>
  );
}
