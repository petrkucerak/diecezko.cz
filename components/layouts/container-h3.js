export default function ContainerH3({ children, className, id }) {
  return (
    <h3 className={`text-xl font-bold w-full mt-4 ${className}`} id={id}>
      {children}
    </h3>
  );
}
