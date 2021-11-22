import useCounter from "../../../hooks/useCounter";
import styles from "./CupOfTea.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";

const CupOfTea = () => {
  const { fluidCounter, increaseFluidCounterHandler } = useCounter(0);

  const cupStage = styles["cupStage".concat(fluidCounter.toString())];
  return (
    <>
      <div className={cupStage}></div>
      <FluidIncreaseButton
        increaseFluidLevel={increaseFluidCounterHandler}
        fluidCounter={fluidCounter}
        fluidType="Tea"
        maxCups={4}
      />
    </>
  );
};

export default CupOfTea;
