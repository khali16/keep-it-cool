import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { DrinksMeasurement } from "../../models/MeasurementModel";
import { filterSelectedDates, findCups } from "./useSelectedWeekUtils";

const useSelectedWeek = () => {
  const drinks: DrinksMeasurement[] = useSelector(
    (state: RootState) => state.expressSlice.drinks
  );
  const selectedDay = useSelector(
    (state: RootState) => new Date(state.dateSlice.selectedDate)
  );

  const [weekMeasurement, setWeekMeasurement] = useState<DrinksMeasurement[]>(
    []
  );

  const setWeekMeasurementHandler = () => {
    const twoDaysBefore = selectedDay.getDate() - 3;
    const setTwoDaysBefore = selectedDay.setDate(twoDaysBefore);

    const inTwoDays = selectedDay.getDate() + 6;
    const setInTwoDays = selectedDay.setDate(inTwoDays);

    setWeekMeasurement(
      filterSelectedDates(
        drinks,
        new Date(setTwoDaysBefore),
        new Date(setInTwoDays)
      )
    );
  };

  const waterCups = findCups("Water", weekMeasurement);
  const coffeeCups = findCups("Coffee", weekMeasurement);
  const teaCups = findCups("Tea", weekMeasurement);
  const beerGlass = findCups("Beer", weekMeasurement);
  const dateLabels = weekMeasurement.map((day) => day.date);

  return {
    weekMeasurement,
    setWeekMeasurementHandler,
    dateLabels,
    waterCups,
    coffeeCups,
    teaCups,
    beerGlass,
  };
};

export default useSelectedWeek;
