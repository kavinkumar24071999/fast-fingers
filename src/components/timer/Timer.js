import React, {useEffect, useState} from "react";

const Timer = ({maxSeconds}) => {
  const [seconds, setSeconds] = useState(maxSeconds);
  const [timerId, setTimerId] = useState();

  const decreaseOneSecond = () => {
    setSeconds((seconds) => seconds - 1);
  };

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timerId);
    }
  }, [seconds]);

  const startTimer = () => {
    clearInterval(timerId);
    setTimerId(setInterval(() => decreaseOneSecond(), 1000));
  };

  return (
    <div className={"Timer"}>
      <button onClick={() => startTimer()}>Start</button>
      <div className="seconds">Remaining Seconds: {seconds}</div>
    </div>
  );
};

export default Timer;