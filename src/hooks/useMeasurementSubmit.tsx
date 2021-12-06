import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { updateMeasurement, fetchMeasurement } from "../store/express-slice";
import { NewMeasurement } from "../models/MeasurementModel";

const useMeasurementSubmit = ({
  increaseFluidLevel,
  fluidCounter,
  fluidType,
}: NewMeasurement) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state: RootState) => state.dateSlice.selectedDate
  );

  const handleSubmitHandler = () => {
    increaseFluidLevel(fluidCounter);
    const updatedMeasurement = {
      date: selectedDate,
      fluid: fluidType,
      cups: fluidCounter + 1,
    };
    dispatch(updateMeasurement(updatedMeasurement));
    dispatch(fetchMeasurement());
  };
  return { handleSubmitHandler };
};

export default useMeasurementSubmit;
