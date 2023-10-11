import { IconCaretDown, IconCaretUp } from "@tabler/icons";
import { useState } from "react";

export default function FaqQuestion({ className, id, children }) {
  const [arrowDownClass, setDownArrowClass] = useState("inline");
  const [arrowUpClass, setUpArrowClass] = useState("hidden");

  const click2question = () => {
    arrowDownClass === "inline" && arrowUpClass === "hidden"
      ? (setDownArrowClass("hidden"), setUpArrowClass("inline"))
      : (setUpArrowClass("hidden"), setDownArrowClass("inline"));
  };
  return (
    <div
      className={`font-bold ${className} border-b border-[#3b3b3b] cursor-pointer flex flex-row justify-between w-full`}
      id={id}
      onClick={click2question}
    >
      <p className="mb-2">{children}</p>
      <IconCaretDown className={arrowDownClass} />
      <IconCaretUp className={arrowUpClass} />
    </div>
  );
}
