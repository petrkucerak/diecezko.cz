export default function Cover({ children }) {
  return (
    <div className="flex items-center flex-col min-h-screen justify-around w-full">
      {children}
    </div>
  );
}
