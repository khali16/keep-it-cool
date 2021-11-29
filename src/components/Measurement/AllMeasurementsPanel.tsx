import React, { useEffect } from "react";
import BeerMeasurement from "./BeerMeasurement/BeerMeasurement";
import CupOfCoffee from "./CoffeeMeasurement/CupOfCoffee";
import CupOfTea from "./TeaMesurement/CupOfTea";
import CupOfWater from "./WaterMeasurement/CupOfWater";
import styles from "./AllMeasurementsLayout.module.css";
import { useDispatch } from "react-redux";
import { fetchMeasurement, updateMeasurement } from "../../store/express-slice";
import useCounter from "../../hooks/useCounter";

const AllMeasurementsPanel = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchMeasurement());
  // }, [updateMeasurement]);
  return (
    <div className={styles.measurementsContainer}>
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

export default AllMeasurementsPanel;
