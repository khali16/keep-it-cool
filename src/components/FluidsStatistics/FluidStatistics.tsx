import { Button } from "@material-ui/core";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useSelectedWeek from "../../hooks/useSelectedWeek/useSelectedWeek";
import EmptyBarLayout from "./EmptyBarLayout";
import { useStyles } from "../Styles/MaterialStyle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FluidStatistics = () => {
  const classes = useStyles();
  const {
    weekMeasurement,
    setWeekMeasurementHandler,
    dateLabels,
    waterCups,
    coffeeCups,
    teaCups,
    beerGlass,
  } = useSelectedWeek();

  const data = {
    labels: dateLabels,
    datasets: [
      {
        label: "Water",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        data: waterCups,
      },

      {
        label: "Coffee",
        backgroundColor: "rgba(169, 109, 59)",
        data: coffeeCups,
      },
      {
        label: "Tea",
        backgroundColor: "rgba(169, 225, 121)",
        data: teaCups,
      },
      {
        label: "Beer",
        backgroundColor: "rgba(236, 239, 9)",
        data: beerGlass,
      },
    ],
  };

  return (
    <>
      {weekMeasurement.length === 0 ? (
        <EmptyBarLayout />
      ) : (
        <Bar data={data} options={options} />
      )}
      <Button
        onClick={setWeekMeasurementHandler}
        variant="outlined"
        className={classes.statisticsButton}
      >
        Check statistics
      </Button>
    </>
  );
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Drank Fluids",
    },
  },
};
export default FluidStatistics;
