export default function ContainerLi({ children, className, id }) {
  return (
    <li className={`my-1 ${className}`} id={id}>
      {children}
    </li>
  );
}
