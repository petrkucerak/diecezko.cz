export default function FaqAnsware({ className, id, children }) {
  return (
    <p className={`${className} mt-2`} id={id}>
      {children}
    </p>
  );
}
