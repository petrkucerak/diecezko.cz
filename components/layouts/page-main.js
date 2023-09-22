export default function PageMain({ children, className, id }) {
  return (
    <div className={`w-full ${className} flex flex-col items-center`} id={id}>
      {children}
    </div>
  );
}
