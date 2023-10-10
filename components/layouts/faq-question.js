export default function FaqQuestion({ className, id, children }) {
  return (
    <p className={`font-bold ${className}`} id={id}>
      {children}
    </p>
  );
}
