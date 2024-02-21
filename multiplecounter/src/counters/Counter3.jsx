import React from 'react';
import useCounter from '../hooks/Usecounter';

const Counter100 = () => {
  const { count, increment, decrement, isDecrementDisabled  } = useCounter(0, 100);

  return (
    <div>
      <h2>Counter 3: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={isDecrementDisabled}>
        Decrement
      </button>
    </div>
  );
};

export default Counter100;
