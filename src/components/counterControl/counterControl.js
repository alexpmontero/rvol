import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { ImPlus, ImMinus } from "react-icons/im";
import "./counterControl.scss";

export const CounterControl = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter_control">
      <Button
        variant="light"
        isIconOnly
        size="sm"
        className="btn_count"
        onClick={handleDecrease}
      >
        <ImMinus />
      </Button>
      <span>{counter}</span>
      <Button
        variant="light"
        isIconOnly
        size="sm"
        className="btn_count"
        onClick={handleIncrease}
      >
        <ImPlus />
      </Button>
    </div>
  );
};
