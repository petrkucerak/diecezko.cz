export default function FaqLayout({ className, id, children }) {
  return (
    <div
      className={`w-full text-lg ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
