import "./Timer.css";
import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(600);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h2>Timer</h2>
      <div>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
    </div>
  );
}
