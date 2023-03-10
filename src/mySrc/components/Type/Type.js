import "./Type.css";

import CardType from "./CardType";
import { useSelector } from "react-redux";
const count = (data, name) => {
  let i = 0;
  data.forEach((d) => {
    if (name.includes(d.type)) i++;
  });
  return i;
};
const Type = () => {
  const data = useSelector((state) => state.hotel.hotels);
  const typeData = require("./type.json");
  typeData.map((t) => {
    t.count = count(data, t.name.toLowerCase());
  });

  return (
    <div>
      <h2 className="type_h2">Browse by property type</h2>
      <div className="type_container">
        {data.length > 0 &&
          typeData.map((data) => <CardType data={data} key={data.name} />)}
      </div>
    </div>
  );
};
export default Type;
