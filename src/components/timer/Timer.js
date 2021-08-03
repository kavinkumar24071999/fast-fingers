import React, {useState} from "react";

const Timer = ({maxSeconds}) => {
  const [seconds, setSeconds] = useState(maxSeconds);

  const decreaseOneSecond = () => {
    setSeconds((seconds) => seconds - 1);
  };

  const startTimer = () => {
    const timerId = setInterval(() => decreaseOneSecond(), 1000);
    setTimeout(() => clearInterval(timerId), maxSeconds * 1000);
  };

  return (
    <div className={"Timer"}>
      <button onClick={() => startTimer()}>Start</button>
      <div className="seconds">Remaining Seconds: {seconds}</div>
    </div>
  );
};

export default Timer;