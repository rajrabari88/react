import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    console.log("Component did mount/update");

    
    return () => {
      console.log("Component will unmount");
    };
  }, [count]); 

  return <div>{count}</div>;
}

export default MyComponent;
