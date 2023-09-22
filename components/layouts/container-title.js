export default function ContainerTitle({ children, className }) {
  return (
    <h2 className={`text-2xl font-semibold my-4 ${className}`}>{children}</h2>
  );
}
