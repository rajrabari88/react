import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{textAlign: 'center', background: 'lightgreen', width: '500px',aligncontent:'center', margin: 'auto' }}>
      <h1>React Web</h1>
      <h2>{count}</h2>
      <button onClick={decrement} style={{ background:'black',color:'white'}}>Decrement</button>
      <button onClick={increment} style={{ background:'black',color:'white'}}>Increment</button>
        <br></br>
      <button onClick={reset} style={{ background:'black',color:'white'}}>Reset</button>
    </div>
  );
};

export default Counter;
