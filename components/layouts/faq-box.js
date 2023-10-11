export default function FaqBox({ className, id, children }) {
  return (
    <div
      className={`${className} p-4 my-6 bg-black/60 rounded-xl backdrop-blur-md`}
      id={id}
    >
      {children}
    </div>
  );
}
