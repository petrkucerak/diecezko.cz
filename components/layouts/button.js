export default function Button({ className, id, children }) {
  return (
    <button
      className={`${className} border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center m-1`}
      id={id}
    >
      {children}
    </button>
  );
}
