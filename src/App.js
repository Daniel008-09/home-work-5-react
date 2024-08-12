import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [milliseconds, setMilliseconds] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 1 && !timer) {
      const startTime = Date.now();
      const newTimer = setInterval(() => {
        const currentTime = Date.now();
        setMilliseconds(currentTime - startTime);
      }, 1);
      setTimer(newTimer);
    }

    if (count === 0 && timer) {
      clearInterval(timer);
      setTimer(null);
      setMilliseconds(0);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [count, timer]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Кликер</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '20px' }}>
        Кликни меня!
      </button>
      <h2>Клики: {count}</h2>
      <h3>Миллисекунды: {milliseconds}</h3>
      <button
        onClick={() => {
          setCount(0);
        }}
        style={{ padding: '10px 20px', fontSize: '20px', marginTop: '20px' }}
      >
        Сбросить
      </button>
    </div>
  );
}

export default App;
