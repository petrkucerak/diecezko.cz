export default function Container({ children, className, id }) {
  return (
    <div
      id={id}
      className={`max-w-[800px] w-[90vw] flex flex-col items-center ${className}`}
    >
      {children}
    </div>
  );
}
