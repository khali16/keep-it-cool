import React from "react";
import "./App.css";
import LogIn from "./components/Authentication/LogIn";
import SignUp from "./components/Authentication/SignUp";
import CupOfCoffee from "./components/Measurement/CupOfCoffee";
import CupOfWater from "./components/Measurement/CupOfWater";

function App() {
  return (
    <>
      <CupOfCoffee />
    </>
  );
}

export default App;
