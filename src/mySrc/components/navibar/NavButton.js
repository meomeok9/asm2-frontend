import "./NavButton.css";
import { useState } from "react";
import Navicon from "./Navicon";

const NavButton = (props) => {
  const [active, setActive] = useState();

  const clickHandler = function () {
    setActive(!active);
  };
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`nav_btn ${active ? "nav_btn--active" : ""}`}
      id={Math.random().toString()}
    >
      <Navicon name={props.name} />
      {props.name.substring(2)}
    </button>
  );
};

export default NavButton;
