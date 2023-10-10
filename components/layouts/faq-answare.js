export default function FaqAnsware({ className, id, children }) {
  return (
    <p className={`${className}`} id={id}>
      {children}
    </p>
  );
}
