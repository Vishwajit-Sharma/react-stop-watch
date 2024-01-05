import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleClick = (type) => {
    if (type === "start") {
      setIsRunning(true);
    } else if (type === "stop") {
      setIsRunning(false);
    } else if (type === "reset") {
      setIsRunning(false);
      setTime(0);
    }
  };

  return (
    <div className="App">
      <h2>{time}</h2>
      <button disabled={isRunning} onClick={() => handleClick("start")}>
        Start
      </button>{" "}
      &nbsp;
      <button disabled={!isRunning} onClick={() => handleClick("stop")}>
        Stop
      </button>{" "}
      &nbsp;
      <button onClick={() => handleClick("reset")}>Reset</button>
    </div>
  );
}
