import NavButton from "./NavButton";
import "./ListButton.css";
const ListButton = () => {
  const listButton = ["faBed", "faPlane", "faCar", "faTaxi"];
  return (
    <div className="listbtn_container">
      {listButton.map((li) => (
        <NavButton name={li} key={li} />
      ))}
    </div>
  );
};
export default ListButton;
