export default function ContainerTitle({ children, className }) {
  return (
    <h1 className={`text-3xl font-bold my-4 ${className}`}>{children}</h1>
  );
}
