export default function FaqQuestion({ className, id, children }) {
  return (
    <p className={`${className}`} id={id}>
      {children}
    </p>
  );
}
