import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface DrinksMeasurement {
  date: string;
  fluids: {
    name: string;
    cups: number;
  }[];
}

const useCupMeasurement = (
  fluidName: string,
  styles: {
    readonly [key: string]: string;
  }
) => {
  const DrinksMeasurement: DrinksMeasurement[] = useSelector(
    (state: RootState) => state.expressSlice.drinks
  );
  const selectedDate = useSelector(
    (state: RootState) => state.dateSlice.selectedDate
  );
  const data = DrinksMeasurement.find(({ date }) => date === selectedDate);
  const specificFluid = data?.fluids.find(({ name }) => name === fluidName);
  const cupMeasurement = specificFluid?.cups;
  const MeasurementStyles = cupMeasurement
    ? styles["cupStage".concat(cupMeasurement?.toString())]
    : styles.cupStage0;
  const FluidIncreaseHandler = (measurement: number) => measurement + 1;
  return { cupMeasurement, MeasurementStyles, FluidIncreaseHandler };
};

export default useCupMeasurement;
