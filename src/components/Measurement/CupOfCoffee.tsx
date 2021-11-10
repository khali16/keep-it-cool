import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "./CupOfCoffee.module.css";

const CupOfCoffee = () => {
  const [coffeeCounter, setCoffeeCounter] = useState(0);

  const setCoffeeCounterHandler = () => {
    setCoffeeCounter(coffeeCounter + 1);
  };

  const cupStage = styles["cupStage".concat(coffeeCounter.toString())];
  return (
    <>
      <div className={cupStage}></div>
      <Box className={styles.container}>
        <Button
          onClick={setCoffeeCounterHandler}
          fullWidth
          disabled={coffeeCounter === 3}
        >
          Add 1 cup of coffee
        </Button>
      </Box>
    </>
  );
};

export default CupOfCoffee;
