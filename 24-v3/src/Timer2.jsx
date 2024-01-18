import "./Timer2.css";
import { useState, useEffect } from "react";

export default function Timer2() {
  const [time, setTime] = useState(300);

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
      <h2>Timer2</h2>
      <div>{`${minutes}:${seconds < 5 ? `0${seconds}` : seconds}`}</div>
    </div>
  );
}
