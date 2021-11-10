import React from "react";
import styles from "./Medal.module.css";
import StarIcon from "@mui/icons-material/Star";

const Medal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.medal}>
        <StarIcon className={styles.starIcon} style={{ fontSize: "120px" }} />
      </div>
    </div>
  );
};

export default Medal;
