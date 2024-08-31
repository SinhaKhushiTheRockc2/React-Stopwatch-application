// Importing necessary modules and hooks
import React, { useEffect, useState } from "react";

// Importing stylesheet
import style from "./Stopwatch.module.css";

// Stopwatch component
function StopWatch() {
  // State to manage the stopwatch's running status
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  // useEffect to handle the stopwatch timer
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevState) => prevState + 10);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);
  console.log(isRunning);

  // Function to reset the timer
  const resetTime = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className={style.stopwatch_container}>
      <h1 className={style.stopwatch_title}>STOPWATCH</h1>
      {/* Stopwatch display */}
      <div className={style.display}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </div>
      <div className={style.button_container}>
        {/* Start button */}
        <button className={style.start} onClick={() => setIsRunning(true)}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9581/9581128.png"
            alt="start"
          />
        </button>
        {/* Pause button */}
        <button className={style.pause} onClick={() => setIsRunning(false)}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2920/2920686.png"
            alt="pause"
          />
        </button>
        {/* Reset button */}
        <button className={style.reset} onClick={resetTime}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9923/9923688.png"
            alt="reset"
          />
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
