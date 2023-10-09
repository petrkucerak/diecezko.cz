export default function ContainerDescription({ children, className }) {
  return (
    <p className={`my-2 tracking-wide font-semibold text-lg ${className}`} >{children}</p>
  );
}
