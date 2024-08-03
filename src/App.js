import React, { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState(0);
  const timeInterval = useRef(null);
  const startTime = useRef(0);

  const startTimer = () => {
    startTime.current = Date.now() - result;
    timeInterval.current = setInterval(updateTime, 10);
  };

  const stopTimer = () => {
    clearInterval(timeInterval.current);
    setResult(Date.now() - startTime.current);
  };

  const resetTimer = () => {
    clearInterval(timeInterval.current);
    startTime.current = 0;
    setResult(0);
  };

  const updateTime = () => {
    setResult(Date.now() - startTime.current);
  };

  const formatTime = (time) => {
    const date = new Date(time);
    const minutes = Math.floor(date.getMinutes()).toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="container">
      <h1>STOPWATCH WEB APPLICATION</h1>
      <div className="display">{formatTime(result)}</div>
      <button className="start-btn" onClick={startTimer}>Start</button>
      <button className="stop-btn" onClick={stopTimer}>Stop</button>
      <button className="reset-btn" onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default App;
