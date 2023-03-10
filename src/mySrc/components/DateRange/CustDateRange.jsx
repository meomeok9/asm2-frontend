import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./CustDateRange.css";

const converMonth = (num) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Set",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[num];
};

const CustDateRange = (props) => {
  let display = props.display;
  if (display === undefined) display = true;
  const [range, setRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const setValue = (item) => {
    const startdate = item.selection.startDate.getDate();
    const startMonth = item.selection.startDate.getMonth();
    const startYear = item.selection.startDate.getFullYear();
    const enddate = item.selection.endDate.getDate();
    const endMonth = item.selection.endDate.getMonth();
    const endYear = item.selection.endDate.getFullYear();
    props.onClick(
      `${startdate}-${converMonth(
        startMonth
      )}-${startYear} to ${enddate}-${converMonth(endMonth)}-${endYear}`
    );
  };

  return (
    <DateRange
      className={`custom_daterange ${display ? "" : "hide"}`}
      editableDateInputs={true}
      onChange={(item) => {
        setValue(item);
        setRange([item.selection]);
      }}
      moveRangeOnFirstSelection={false}
      ranges={range}
    />
  );
};
export default CustDateRange;
