import {
  IconBusStop,
  IconCaretDown,
  IconCaretUp,
  IconChefHat,
  IconHorseToy,
  IconLuggage,
  IconMedicalCross,
  IconOld,
  IconPencil,
  IconPigMoney,
} from "@tabler/icons";
import { useState } from "react";
export default function FaqBox({ className, id, children, question, icon }) {
  const [arrowDownClass, setDownArrowClass] = useState("inline");
  const [arrowUpClass, setUpArrowClass] = useState("hidden");
  const [answerClass, setAnswerClass] = useState("hidden");

  const click2question = () => {
    arrowDownClass === "inline" && arrowUpClass === "hidden"
      ? (setDownArrowClass("hidden"),
        setUpArrowClass("inline"),
        setAnswerClass(""))
      : (setUpArrowClass("hidden"),
        setDownArrowClass("inline"),
        setAnswerClass("hidden"));
  };
  return (
    <div className={`${className} p-4`} id={id}>
      <div
        className={`font-bold ${className} border-b border-[#3b3b3b] cursor-pointer flex flex-row justify-between w-full`}
        id={id}
        onClick={click2question}
      >
        <p className="mb-2 flex flex-row items-center">
          {icon === "money" ? (
            <IconPigMoney className="inline mr-2" stroke={1.2} />
          ) : icon === "luggage" ? (
            <IconLuggage className="inline mr-2" stroke={1.2} />
          ) : icon === "kid" ? (
            <IconHorseToy className="inline mr-2" stroke={1.2} />
          ) : icon === "pencil" ? (
            <IconPencil className="inline mr-2" stroke={1.2} />
          ) : icon === "chef" ? (
            <IconChefHat className="inline mr-2" stroke={1.2} />
          ) : icon === "bus" ? (
            <IconBusStop className="inline mr-2" stroke={1.2} />
          ) : icon === "medical" ? (
            <IconMedicalCross className="inline mr-2" stroke={1.2} />
          ) : icon === "old" ? (
            <IconOld className="inline mr-2" stroke={1.2} />
          ) : null}
          {question}
        </p>
        <IconCaretDown className={`${arrowDownClass}`} />
        <IconCaretUp className={`${arrowUpClass}`} />
      </div>
      <p className={`${className} mt-2 ${answerClass}`} id={id}>
        {children}
      </p>
    </div>
  );
}
