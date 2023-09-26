export default function CardFeed({ className, id, children }) {
  return (
    <div
      className={`${className} w-full flex flex-row flex-wrap items-center justify-center`}
      id={id}
    >
      {children}
    </div>
  );
}
