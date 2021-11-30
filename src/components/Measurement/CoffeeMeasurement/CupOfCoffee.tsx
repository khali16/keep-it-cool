import styles from "./CupOfCoffee.module.css";
import FluidIncreaseButton from "../FluidIncreaseButton";
import useCupMeasurement from "../../../hooks/useCupMeasurement";

const CupOfCoffee = () => {
  const { cupMeasurement, MeasurementStyles, FluidIncreaseHandler } =
    useCupMeasurement("Coffee", styles);
  return (
    <>
      <div className={MeasurementStyles}></div>
      <FluidIncreaseButton
        increaseFluidLevel={FluidIncreaseHandler}
        fluidCounter={cupMeasurement || 0}
        fluidType="Coffee"
        maxCups={3}
      />
    </>
  );
};

export default CupOfCoffee;
