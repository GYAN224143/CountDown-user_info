import "./CountdownTimer.css"; // Import the CSS file
import React, { useState, useRef } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(180);
  const [isActive, setIsActive] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const timerRef = useRef();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsActive(true);
    setButtonClicked(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  };

  const stopTimer = () => {
    setIsActive(false);
    setButtonClicked(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(180);
  };

  const handleTimeChange = (event) => {
    const newTime = parseInt(event.target.value, 10);
    setTime(isNaN(newTime) ? 0 : newTime);
  };

  return (
    <div className="count-Container">
      <div className="Ccontainer">
        <h1>Countdown</h1>
        <div>
          <label>
            Set Time (seconds):
            <input type="number" value={time} onChange={handleTimeChange} />
          </label>
        </div>
        <div>
          <p>Current Time: {formatTime(time)}</p>
          <button
            className={buttonClicked ? "clicked" : ""}
            onClick={isActive ? stopTimer : startTimer}
          >
            {isActive ? "Stop Timer" : "Start Timer"}
          </button>
          <button onClick={resetTimer}>Reset Timer</button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
