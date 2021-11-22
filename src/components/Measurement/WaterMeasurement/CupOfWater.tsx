import styles from "./CupOfWater.module.css";
import useCounter from "../../../hooks/useCounter";
import FluidIncreaseButton from "../FluidIncreaseButton";

const CupOfWater = () => {
  const waterFluidCounter = useCounter(0);

  const jeden =
    styles["cupStage".concat(waterFluidCounter.fluidCounter.toString())];
  return (
    <>
      <div className={jeden}></div>
      <FluidIncreaseButton
        increaseFluidLevel={waterFluidCounter.increaseFluidCounterHandler}
        fluidCounter={waterFluidCounter.fluidCounter}
        fluidType="Water"
        maxCups={5}
      />
    </>
  );
};

export default CupOfWater;
