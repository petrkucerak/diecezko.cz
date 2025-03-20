export default function ContainerOl({ children, className, id }) {
  return (
    <ul className={`list-decimal text-lg pl-6 w-full ${className}`} id={id}>
      {children}
    </ul>
  );
}
