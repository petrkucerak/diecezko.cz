export default function ContainerDescription({ children, className }) {
  return (
    <p className={`my-2 tracking-widest text-lg ${className}`}>{children}</p>
  );
}
