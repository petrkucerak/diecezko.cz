import React, { useEffect, useState } from "react";

export default function Countdown({ countDownDate }) {
  //   const [string, setString] = useState("Diecézko začíná za:");
  const [day, setDay] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const dayString =
        days > 4 ? "dní" : days > 1 ? "dny" : days === 1 ? "den" : "";
      const hoursString =
        hours > 4
          ? "hodin"
          : hours > 1
          ? "hodiny"
          : hours === 1
          ? "hodina"
          : "";
      const minutString =
        minutes > 4
          ? "minut"
          : minutes > 1
          ? "minuty"
          : minutes === 1
          ? "minuta"
          : "";
      const secondString =
        seconds > 4
          ? "sekund"
          : seconds > 1
          ? "sekundy"
          : seconds === 1
          ? "sekunda"
          : "";

      setSecond(seconds);
      setMinute(minutes);
      setHour(hours);
      setDay(days);
    }, 1000);
  });
  return (
    <div className="flex flex-row text-xl w-full items-center justify-center">
      <div className="mx-1 w-10 h-10 border border-[#3b3b3b] rounded-xl text-center flex items-center justify-center">
        {day}
      </div>
      <div className="mx-1 w-10 h-10 border border-[#3b3b3b] rounded-xl text-center flex items-center justify-center">
        {hour}
      </div>
      <div className="mx-1 w-10 h-10 border border-[#3b3b3b] rounded-xl text-center flex items-center justify-center">
        {minute}
      </div>
      <div className="mx-1 w-10 h-10 border border-[#3b3b3b] rounded-xl text-center flex items-center justify-center">
        {second}
      </div>
    </div>
  );
}
