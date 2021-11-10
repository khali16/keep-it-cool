import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./CupOfTea.module.css";

const CupOfTea = () => {
  const [teaCounter, setTeaCounter] = useState(0);

  const setTeaCounterHandler = () => {
    setTeaCounter(teaCounter + 1);
  };

  const cupStage = styles["cupStage".concat(teaCounter.toString())];
  return (
    <>
      <div className={cupStage}></div>
      <Button onClick={setTeaCounterHandler} disabled={teaCounter === 4}>
        Add one cup of tea!
      </Button>
    </>
  );
};

export default CupOfTea;
