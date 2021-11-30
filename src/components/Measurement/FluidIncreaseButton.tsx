import React, { useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchMeasurement } from "../../store/express-slice";
import { NewMeasurement } from "../../models/MeasurementModel";
import useMeasurementSubmit from "../../hooks/useMeasurementSubmit";

interface Props extends NewMeasurement {
  maxCups: number;
}

const FluidIncreaseButton: React.FC<Props> = ({
  increaseFluidLevel,
  fluidCounter,
  fluidType,
  maxCups,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeasurement());
  }, []);

  const { handleSubmitHandler } = useMeasurementSubmit({
    increaseFluidLevel,
    fluidCounter,
    fluidType,
  });

  return (
    <Box
      style={{
        width: "250px",
        height: "50px",
        margin: "auto",
        marginTop: "30%",
      }}
    >
      <Button
        onClick={handleSubmitHandler}
        disabled={isCupFull(fluidCounter, maxCups)}
        variant="outlined"
      >
        Add one cup of {fluidType}!
      </Button>
    </Box>
  );
};

const isCupFull = (fluid: number, maxCups: number): boolean => {
  return fluid === maxCups;
};

export default FluidIncreaseButton;
