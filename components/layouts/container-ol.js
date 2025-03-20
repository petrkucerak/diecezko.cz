export default function ContainerOl({ children, className, id }) {
  return (
    <ol className={`list-decimal text-lg pl-6 w-full ${className}`} id={id}>
      {children}
    </ol>
  );
}
