import { DrinksMeasurement, FluidType } from "../../models/MeasurementModel";

export const filterSelectedDates = (
  drinks: DrinksMeasurement[],
  beforeDate: Date,
  futureDate: Date
): React.SetStateAction<DrinksMeasurement[]> => {
  return drinks?.filter(
    ({ date }) => new Date(date) >= beforeDate && new Date(date) <= futureDate
  );
};

export const findCupsMeasurement = (filteredCups: FluidType[]): number[] => {
  return filteredCups.map((cupsMeasurement) => cupsMeasurement?.cups);
};

export const findFluidType = (
  drinks: DrinksMeasurement[],
  fluidName: string
) => {
  const filteredFluid: FluidType[] = [];
  drinks.forEach((fluidPerDay) => {
    const fluid = fluidPerDay.fluids.find(({ name }) => name === fluidName);
    fluid && filteredFluid.push(fluid);
  });
  return filteredFluid;
};

export const findCups = (fluidType: string, weekMeasurement: any) =>
  findCupsMeasurement(findFluidType(weekMeasurement, fluidType));
