import { Fragment } from "react";
import "./CardType.css";
const CardType = (props) => {
  const data = props.data;

  return (
    <div className=".img_type_container" key={data.name}>
      <img className="img_type" src={data.image} alt={data.name} />
      <div>
        <h2>{data.name}</h2>
        <h3 className="h3_type_blur">
          {data.count} {data.name.toLowerCase()}
        </h3>
      </div>
    </div>
  );
};
export default CardType;
