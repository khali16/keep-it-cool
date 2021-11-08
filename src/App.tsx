import React from "react";
import "./App.css";
import LogIn from "./components/Authentication/LogIn";
import SignUp from "./components/Authentication/SignUp";

function App() {
  return (
    <>
      <SignUp />
      <LogIn />
    </>
  );
}

export default App;
