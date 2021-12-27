import styles from "./BeerMeasurement.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";
import useCupMeasurement from "../../../hooks/useCupMeasurement";

const BeerMeasurement = () => {
  const { cupMeasurement, MeasurementStyles, FluidIncreaseHandler } =
    useCupMeasurement("Beer", styles);

  return (
    <>
      <div className={MeasurementStyles} />
      <FluidIncreaseButton
        increaseFluidLevel={FluidIncreaseHandler}
        fluidCounter={cupMeasurement || 0}
        fluidType="Beer"
        maxCups={2}
      />
    </>
  );
};

export default BeerMeasurement;
