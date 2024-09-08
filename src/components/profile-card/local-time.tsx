"use client";

import { useState, useEffect } from "react";

const options: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Bucharest",
};

export default function LocalTime() {
  const [localTime, setLocalTime] = useState("");

  function updateLocalTime() {
    const now = new Date();
    const timeString = new Intl.DateTimeFormat("ro", options).format(now);
    setLocalTime(timeString);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      updateLocalTime();
    }, 60000);

    updateLocalTime();

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="text-center text-sm ms:text-base text-gray-500/85 dark:text-slate-400/85 mb-8 xs:mb-10 ms:mb-12 transition duration-300">
      <span>Local time: </span>
      <span className="font-medium">{localTime}</span>
    </p>
  );
}
