import useCounter from "../../../hooks/useCounter";
import styles from "./CupOfCoffee.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";

const CupOfCoffee = () => {
  const { fluidCounter, increaseFluidCounterHandler } = useCounter(0);

  const cupStage = styles["cupStage".concat(fluidCounter.toString())];
  return (
    <>
      <div className={cupStage}></div>
      <FluidIncreaseButton
        increaseFluidLevel={increaseFluidCounterHandler}
        fluidCounter={fluidCounter}
        fluidType="Coffee"
        maxCups={3}
      />
    </>
  );
};

export default CupOfCoffee;
