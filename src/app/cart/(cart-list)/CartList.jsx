import CartItem from "./CartItem";

export default function CartList({ courses }) {
  return (
    <div className="space-y-5">
      {courses.map((course) => (
        <CartItem
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}