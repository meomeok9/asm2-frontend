import "./HeadForm.css";
import Navicon from "./Navicon";
import CustDateRange from "../DateRange/CustDateRange";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeadForm = () => {
  const [displayState, setDisplay] = useState(false);
  const [dateValue, setDateValue] = useState("Time");
  const [dateStart, setDateStart] = useState("");
  const [dataEnd, setDateEnd] = useState("");
  const [city, setCity] = useState("");
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const navigate = useNavigate();
  const setValue = (data) => {
    setDateValue(data);
    const dates = data.split(" to ");
    setDateStart(dates[0]);
    setDateEnd(dates[1]);
  };

  const openDaterangeModal = () => {
    setDisplay(!displayState);
  };

  const inputCityChangeHandler = (e) => {
    if (e.target.value.trim() !== "") setCity(e.target.value);
    else setCity("");
  };
  const adultChangeHandler = (e) => {
    setAdult(e.target.value);
  };
  const childrenChangeHandler = (e) => {
    setChildren(e.target.value);
  };

  const roomsChangeHandler = (e) => {
    setRooms(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("Enter City you want to go !(Ha Noi, Da Nang, Ho Chi Minh)");
      return;
    }
    if (dateStart === "" || dataEnd === "") {
      alert("Select time ! ! !");
      return;
    }
    navigate(
      `/search?city=${city}&dateStart=${dateStart}&dateEnd=${dataEnd}${
        +adult + +children > 0 ? `&maxPeople=${+adult + +children}` : ""
      }${+rooms > 0 ? `&rooms=${+rooms}` : ""}`
    );
  };

  return (
    <form className="head_main" onSubmit={submitHandler}>
      <div className="head_input head_bed">
        <Navicon name={"bed"} />
        <input
          type="text"
          className="header_input"
          placeholder="Where are you going"
          onChange={inputCityChangeHandler}
        />
      </div>
      <div className="head_input head_calendar">
        <div>
          <Navicon name={"calendar"} />
          <input
            type="text"
            onClick={openDaterangeModal}
            className="header_input daterange_input"
            placeholder={dateValue}
            value={dateValue}
            onChange={() => {}}
          />
        </div>
        <CustDateRange onClick={setValue} display={displayState} />
      </div>
      <div className="head_input head_other">
        <Navicon name={"female"} />
        <input
          className="header_input head_sm_input"
          type="number"
          placeholder="1 adult"
          onChange={adultChangeHandler}
          min={0}
        />
      </div>
      <div className="head_other">
        <input
          className="header_input head_sm_input "
          type="number"
          placeholder="0 children"
          onChange={childrenChangeHandler}
          min={0}
        />
      </div>
      <div className="head_other">
        <input
          className="header_input head_sm_input"
          type="number"
          placeholder="1 rom"
          onChange={roomsChangeHandler}
          min={0}
        />
      </div>

      <button type="submit" className="head_btn">
        Search
      </button>
    </form>
  );
};
export default HeadForm;
