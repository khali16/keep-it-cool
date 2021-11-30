import styles from "./CupOfWater.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";
import useCupMeasurement from "../../../hooks/useCupMeasurement";

const CupOfWater = () => {
  const { cupMeasurement, MeasurementStyles, FluidIncreaseHandler } =
    useCupMeasurement("Water", styles);
  return (
    <>
      <div className={MeasurementStyles}></div>
      <FluidIncreaseButton
        increaseFluidLevel={FluidIncreaseHandler}
        fluidCounter={cupMeasurement || 0}
        fluidType="Water"
        maxCups={5}
      />
    </>
  );
};

export default CupOfWater;
