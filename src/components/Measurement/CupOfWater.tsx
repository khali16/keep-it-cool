import { Button, Box } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./CupOfWater.module.css";
import Medal from "./Medal";

const CupOfWater = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounterHandler = () => {
    setCounter(counter + 1);
  };

  const jeden = styles["cupStage".concat(counter.toString())];
  return (
    <>
      <div className={`${jeden}`}>
        {counter === 5 ? (
          <div className={styles.test}>
            <Medal />
          </div>
        ) : (
          ""
        )}
      </div>
      <Box className={styles.increaseButton}>
        <Button
          onClick={increaseCounterHandler}
          variant="outlined"
          fullWidth
          disabled={counter === 5}
        >
          Add one cup of water!
        </Button>
      </Box>
    </>
  );
};

export default CupOfWater;
