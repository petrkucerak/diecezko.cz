import React, { useEffect, useState } from "react";

export default function Countdown({ countDownDate }) {
  //   const [string, setString] = useState("Diecézko začíná za:");
  const [day, setDay] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [second, setSecond] = useState(0);

  const [dayString, setDayString] = useState("dní");
  const [minuteString, setMinuteString] = useState("hodin");
  const [hourString, setHourString] = useState("minut");
  const [secondString, setSecondString] = useState("vteřin");

  const [dayOpacity, setDayOpacity] = useState("hidden");
  const [minuteOpacity, setMinuteOpacity] = useState("hidden");
  const [hourOpacity, setHourOpacity] = useState("hidden");

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

      setDayString(
        days > 4 ? "dní" : days > 1 ? "dny" : days === 1 ? "den" : ""
      );
      setHourString(
        hours > 4
          ? "hodin"
          : hours > 1
          ? "hodiny"
          : hours === 1
          ? "hodina"
          : "hodin"
      );
      setMinuteString(
        minutes > 4
          ? "minut"
          : minutes > 1
          ? "minuty"
          : minutes === 1
          ? "minuta"
          : "minut"
      );
      setSecondString(
        seconds > 4
          ? "sekund"
          : seconds > 1
          ? "sekundy"
          : seconds === 1
          ? "sekunda"
          : "sekund"
      );

      setSecond(seconds);
      setMinute(minutes);
      setHour(hours);
      setDay(days);

      if (days > 0) {
        setDayOpacity("");
        setMinuteOpacity("");
        setHourOpacity("");
      } else if (hours > 0) {
        setHourOpacity("");
        setMinuteOpacity("");
      } else if (minutes > 0 && seconds > 0) setMinuteOpacity("");
    }, 1000);
  });
  return (
    <div className="flex flex-col items-center justify-center -mt-1 tracking-tight scale-75 md:scale-100">
      {/* <p className="uppercase font-semibold -mb-2 tracking-wider">JIŽ ZA</p> */}
      <div className="flex flex-row text-xl items-center justify-center rounded-xl p-1 font-semibold">
        <div
          className={`flex flex-col items-center justify-center ${dayOpacity}`}
        >
          <span className="w-12 text-center -mb-2">{day}</span>
          <span className="text-xs font-light text-center">{dayString}</span>
        </div>
        <span className={dayOpacity}>{":"}</span>
        <div
          className={`flex flex-col items-center justify-center ${hourOpacity}`}
        >
          <span className="w-12 text-center -mb-2">{hour}</span>
          <span className="text-xs font-light text-center">{hourString}</span>
        </div>
        <span className={hourOpacity}>{":"}</span>
        <div
          className={`flex flex-col items-center justify-center ${minuteOpacity}`}
        >
          <span className="w-11 text-center -mb-2">{minute}</span>
          <span className="text-xs font-light text-center">{minuteString}</span>
        </div>
        <span className={minuteOpacity}>{":"}</span>
        <div
          className={`flex flex-col items-center justify-center ${minuteOpacity}`}
        >
          <span className="w-12 text-center -mb-2">{second}</span>
          <span className="text-xs font-light text-center">{secondString}</span>
        </div>
      </div>
    </div>
  );
}
