import React, { useState } from "react";

const useCounter = (initialFluidCounter: number) => {
  const [fluidCounter, setFluidCounter] = useState(initialFluidCounter);

  const increaseFluidCounterHandler = () => {
    setFluidCounter((prevFluidCounter) => prevFluidCounter + 1);
  };
  return { fluidCounter, increaseFluidCounterHandler };
};

export default useCounter;
