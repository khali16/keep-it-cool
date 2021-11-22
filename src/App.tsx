import styles from "./App.module.css";
import LogInWrapper from "./components/Authentication/LogInWrapper";
import SignUpWrapper from "./components/Authentication/SignUpWrapper";
import BeerMeasurement from "./components/Measurement/BeerMeasurement/BeerMeasurement";
import CupOfCoffee from "./components/Measurement/CoffeeMeasurement/CupOfCoffee";
import CupOfTea from "./components/Measurement/TeaMesurement/CupOfTea";
import CupOfWater from "./components/Measurement/WaterMeasurement/CupOfWater";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstCup}>
        <CupOfWater />
      </div>
      <div className={styles.secondCup}>
        <CupOfCoffee />
      </div>
      <div className={styles.thirdCup}>
        <CupOfTea />
      </div>
      <div className={styles.fourthCup}>
        <BeerMeasurement />
      </div>
    </div>
  );
};

export default App;
