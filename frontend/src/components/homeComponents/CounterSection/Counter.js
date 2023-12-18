import React, { useState, useEffect } from "react";

const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endValue) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10); // Auto-increment every second

    return () => clearInterval(interval);
  }, [count, endValue]);

  return (
    <div className="counter">
      {/* <p>{count}</p> */}
      <div className="cnt">
        <p>{count}</p>
      </div>
      <div className="thousand">
        <p>{count}K</p>
      </div>
      <div className="million">
        <p>{count}M </p>
      </div>
    </div>
  );
};

export default Counter;
