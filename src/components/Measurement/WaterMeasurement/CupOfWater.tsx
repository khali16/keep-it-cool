import styles from "./CupOfWater.module.css";
import useCounter from "../../../hooks/useCounter";
import FluidIncreaseButton from "../FluidIncreaseButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMeasurement } from "../../../store/express-slice";

const CupOfWater = () => {
  const { fluidCounter, increaseFluidCounterHandler } = useCounter(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeasurement());
  });

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
