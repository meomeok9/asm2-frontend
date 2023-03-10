import "./CardCity.css";
import { Fragment } from "react";
const CardCity = (props) => {
  const data = props.data;
  return (
    <Fragment>
      {data &&
        data.map((d) => (
          <div className="img_city_container" key={d.name}>
            <img className="img_city" src={d.image} alt={d.name} />;
            <div className="img_city_text_container">
              <h2>{d.name}</h2>
              <h4>{d.subText} Properties</h4>
            </div>
          </div>
        ))}
    </Fragment>
  );
};
export default CardCity;
