import styles from "./CupOfTea.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";
import useCupMeasurement from "../../../hooks/useCupMeasurement";

const CupOfTea = () => {
  const { cupMeasurement, MeasurementStyles, FluidIncreaseHandler } =
    useCupMeasurement("Tea", styles);
  return (
    <>
      <div className={MeasurementStyles}></div>
      <FluidIncreaseButton
        increaseFluidLevel={FluidIncreaseHandler}
        fluidCounter={cupMeasurement || 0}
        fluidType="Tea"
        maxCups={4}
      />
    </>
  );
};

export default CupOfTea;
