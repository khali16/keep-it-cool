import React, { useState } from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { saveDate } from "../../store/date-slice";
import { useDispatch } from "react-redux";

const DatePicker = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState<Date | null>(new Date());

  const changeDateHandler = (newDate: Date | null) => {
    setDate(newDate);
    const formattedDate = newDate
      ? newDate?.getMonth() +
        1 +
        "." +
        newDate?.getDate() +
        "." +
        newDate?.getFullYear()
      : null;
    dispatch(saveDate(formattedDate));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Select date"
        inputFormat="MM/dd/yyyy"
        value={date}
        onChange={changeDateHandler}
        renderInput={(params) => (
          <TextField {...params} style={{ marginLeft: "40%" }} />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
