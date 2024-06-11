import React, { useState, useEffect } from 'react';

function FunctionalComponentLifecycle() {
  const [count, setCount] = useState(0); 
  const [data, setData] = useState(null); 

  
  useEffect(() => {
    console.log(' Component mounted or count updated');

    
    return () => {
      console.log('Component will unmount or count will update');
    };
  }, [count]); 

  
  useEffect(() => {
    console.log(' Component mounted');

    
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData));

    
    return () => {
      console.log(' Component will unmount');
    };
  }, []); 

  return (
    <div>
      <div>Count: {count}</div>
      <div>{data ? data.value : 'Loading data...'}</div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default FunctionalComponentLifecycle;
