import AllMeasurementsPanel from "./components/Measurement/AllMeasurementsPanel";
import DatePicker from "./components/DatePicker/DatePicker";
import FluidStatistics from "./components/FluidsStatistics/FluidStatistics";

const App = () => {
  return (
    <>
      <DatePicker />
      <AllMeasurementsPanel />
      <FluidStatistics />
    </>
  );
};

export default App;
