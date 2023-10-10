export default function FaqLayout({ className, id, children }) {
  return (
    <div
      className={`w-full bg-black/60 rounded-xl backdrop-blur-md p-2 text-lg ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
