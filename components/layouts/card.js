export default function Card({ className, id, children }) {
  return (
    <div className={`${className} bg-black/60 rounded-xl p-4`} id={id}>
      {children}
    </div>
  );
}
