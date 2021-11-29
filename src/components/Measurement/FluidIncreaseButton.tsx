import React, { useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateMeasurement } from "../../store/express-slice";
import { fetchMeasurement } from "../../store/express-slice";

interface Props {
  increaseFluidLevel: () => void;
  fluidCounter: number;
  fluidType: string;
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

  const handleSubmit = () => {
    increaseFluidLevel();
    const dzien = new Date().toDateString();
    const measurement = {
      date: dzien,
      fluid: fluidType,
      cups: fluidCounter + 1,
    };
    dispatch(updateMeasurement(measurement));
    dispatch(fetchMeasurement());
  };

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
        onClick={handleSubmit}
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
