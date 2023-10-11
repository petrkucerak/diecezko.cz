export default function FaqLayout({ className, id, children }) {
  return (
    <div
      className={`w-full text-lg bg-black/60 rounded-xl backdrop-blur-md my-2 ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
