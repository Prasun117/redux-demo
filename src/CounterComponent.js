import React from "react";

export const CounterComponent = (props) => {
  const { increment, decrement } = props;
  return (
    <>
      <input type="number" className="quantity-input" disabled />
      <button className="button-counter primary ">+</button>
      <button className="button-counter warning">-</button>
    </>
  );
};
