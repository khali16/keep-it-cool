export interface NewMeasurement {
  increaseFluidLevel: (measurement: number) => number;
  fluidCounter: number;
  fluidType: string;
}

export interface FluidType {
  name: string;
  cups: number;
}

export interface DrinksMeasurement {
  date: string;
  fluids: FluidType[];
}
