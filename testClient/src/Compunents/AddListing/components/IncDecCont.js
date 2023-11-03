import React, { useState } from 'react';
import useNumberInput from '../Custom/NumberHook';

function IncDecContainer({ initialValue, onValueChange }) {

  
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
    onValueChange(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onValueChange(count - 1);
    }
  };

  return (
    <div>
      <div>
        Count: {count}
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default IncDecContainer;