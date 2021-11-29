import styles from "./CupOfWater.module.css";
import useCounter from "../../../hooks/useCounter";
import FluidIncreaseButton from "../FluidIncreaseButton";

const CupOfWater = () => {
  const { fluidCounter, increaseFluidCounterHandler } = useCounter(0);
  const jeden = styles["cupStage".concat(fluidCounter.toString())];
  return (
    <>
      <div className={jeden}></div>
      <FluidIncreaseButton
        increaseFluidLevel={increaseFluidCounterHandler}
        fluidCounter={fluidCounter}
        fluidType="Water"
        maxCups={5}
      />
    </>
  );
};

export default CupOfWater;
