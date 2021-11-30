export interface NewMeasurement {
  increaseFluidLevel: (measurement: number) => number;
  fluidCounter: number;
  fluidType: string;
}
