
import React from 'react';
import useCounter from '../hooks/Usecounter';

const Counter1 = () => {
  const { count, increment, decrement , isDecrementDisabled } = useCounter();

  return (
    <div>
     <h2>Counter 1: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={isDecrementDisabled}>
        Decrement
      </button>
    </div>
  );
};

export default Counter1;
