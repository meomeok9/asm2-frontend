import { useSelector } from "react-redux";
import CardCity from "./CardCity";
import "./City.css";

const getProperties = (data, cityName) => {
  let i = 0;
  data.forEach((hotel) => {
    if (hotel.city === cityName) i++;
  });
  return i + "";
};

const City = () => {
  const data = useSelector((state) => state.hotel.hotels);
  const cityData = require("./city.json");
  cityData.map((c) => {
    c.subText = getProperties(data, c.name);
  });
  //console.log(cityData);
  return (
    <div className="city_container">
      {data.length > 0 && <CardCity data={cityData} />}
    </div>
  );
};
export default City;
