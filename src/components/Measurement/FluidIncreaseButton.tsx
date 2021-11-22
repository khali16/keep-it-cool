import React from "react";
import { Button, Box } from "@material-ui/core";

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
        onClick={increaseFluidLevel}
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
