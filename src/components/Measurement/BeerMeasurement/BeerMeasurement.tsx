import useCounter from "../../../hooks/useCounter";
import styles from "./BeerMeasurement.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";

const BeerMeasurement = () => {
  const { fluidCounter, increaseFluidCounterHandler } = useCounter(0);

  const glassStage = styles["glassStage".concat(fluidCounter.toString())];

  return (
    <>
      <div className={glassStage} />
      <FluidIncreaseButton
        increaseFluidLevel={increaseFluidCounterHandler}
        fluidCounter={fluidCounter}
        fluidType="Beer"
        maxCups={2}
      />
    </>
  );
};

export default BeerMeasurement;
