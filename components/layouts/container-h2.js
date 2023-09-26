export default function ContainerH2({ children, className, id }) {
  return (
    <h2 className={`text-xl font-bold w-full mt-4 ${className}`} id={id}>
      {children}
    </h2>
  );
}
