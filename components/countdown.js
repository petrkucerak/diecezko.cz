import React, { useEffect, useState } from "react";

export default function Countdown({ countDownDate }) {
  const [string, setString] = useState("Diecézko začíná za:");

  useEffect(() => {
    setTimeout(() => {
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

        setString(
          `${days !== 0 ? days : ""}&nbsp;${dayString} ${
            hours !== 0 ? hours : ""
          }&nbsp;${hoursString} ${
            minutes !== 0 ? minutes : ""
          }&nbsp;${minutString} ${
            seconds !== 0 ? seconds : ""
          }&nbsp;${secondString}`
        );
      }, 1000);
    }, 1000);
  });
  return (
    <p
      className="sm:text-lg md:text-xl tracking-widest font-semibold text-center"
      dangerouslySetInnerHTML={{ __html: string }}
    />
  );
}
