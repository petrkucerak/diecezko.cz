import React, { useEffect, useState } from "react";

export default function Countdown() {
  const [string, setString] = useState("");

  let i = 0;
  useEffect(() => {
    setInterval(() => {
      i += 1;
      setString(`${i}`);
    }, 1000);
  });
  return <p>{string}</p>;
}
