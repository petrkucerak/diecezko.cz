export default function ContainerUl({ children, className, id }) {
  return (
    <ul className={`list-disc text-lg pl-6 w-full ${className}`} id={id}>
      {children}
    </ul>
  );
}
