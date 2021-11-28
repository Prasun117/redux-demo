import React from "react";

export const CounterComponent = (props) => {
  const { increment, decrement, counter } = props;
  return (
    <>
      <input
        type="number"
        className="quantity-input"
        value={counter}
        disabled
      />
      <button className="button-counter primary " onClick={increment}>
        +
      </button>
      <button className="button-counter warning" onClick={decrement}>
        -
      </button>
    </>
  );
};
