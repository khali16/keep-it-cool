import useCounter from "../../../hooks/useCounter";
import styles from "./BeerMeasurement.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";

const BeerMeasurement = () => {
  const beerFluidCounter = useCounter(0);

  const glassStage =
    styles["glassStage".concat(beerFluidCounter.fluidCounter.toString())];

  return (
    <>
      <div className={glassStage} />
      <FluidIncreaseButton
        increaseFluidLevel={beerFluidCounter.increaseFluidCounterHandler}
        fluidCounter={beerFluidCounter.fluidCounter}
        fluidType="Beer"
        maxCups={2}
      />
    </>
  );
};

export default BeerMeasurement;
