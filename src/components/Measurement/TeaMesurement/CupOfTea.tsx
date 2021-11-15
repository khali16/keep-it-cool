import useCounter from "../../../hooks/useCounter";
import styles from "./CupOfTea.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";

const CupOfTea = () => {
  const teaFluidCounter = useCounter(0);

  const cupStage =
    styles["cupStage".concat(teaFluidCounter.fluidCounter.toString())];
  return (
    <>
      <div className={cupStage}></div>
      <FluidIncreaseButton
        increaseFluidLevel={teaFluidCounter.increaseFluidCounterHandler}
        fluidCounter={teaFluidCounter.fluidCounter}
        fluidType="Tea"
        maxCups={4}
      />
    </>
  );
};

export default CupOfTea;
