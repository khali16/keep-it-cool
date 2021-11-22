import React from "react";
import "./App.css";
import BeerMeasurement from "./components/Measurement/BeerMeasurement/BeerMeasurement";
import CupOfCoffee from "./components/Measurement/CoffeeMeasurement/CupOfCoffee";
import CupOfTea from "./components/Measurement/TeaMesurement/CupOfTea";
import CupOfWater from "./components/Measurement/WaterMeasurement/CupOfWater";

function App() {
  return (
    <div style={{ display: "grid" }}>
      <div style={{ gridColumn: "1", gridRow: "1" }}>
        <CupOfWater />
      </div>
      <div style={{ gridColumn: "2", gridRow: "1" }}>
        <CupOfCoffee />
      </div>
      <div style={{ gridColumn: "3", gridRow: "1" }}>
        <CupOfTea />
      </div>
      <div style={{ gridColumn: "4", gridRow: "1" }}>
        <BeerMeasurement />
      </div>
    </div>
  );
}

export default App;
