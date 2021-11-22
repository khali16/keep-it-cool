import useCounter from "../../../hooks/useCounter";
import styles from "./CupOfCoffee.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";

const CupOfCoffee = () => {
  const coffeeFluidCounter = useCounter(0);

  const cupStage =
    styles["cupStage".concat(coffeeFluidCounter.fluidCounter.toString())];
  return (
    <>
      <div className={cupStage}></div>
      <FluidIncreaseButton
        increaseFluidLevel={coffeeFluidCounter.increaseFluidCounterHandler}
        fluidCounter={coffeeFluidCounter.fluidCounter}
        fluidType="Coffee"
        maxCups={3}
      />
    </>
  );
};

export default CupOfCoffee;
