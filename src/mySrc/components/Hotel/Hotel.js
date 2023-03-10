import { useSelector } from "react-redux";
import CardHotel from "./CardHotel";

import "./Hotel.css";
const Hotel = () => {
  const dataHotel = useSelector((state) => state.hotel.top3);
  return (
    <div className="main_hotel_container">
      <h2>Homes guests love</h2>
      <div className="sub_hotel_container">
        {dataHotel.length > 0 &&
          dataHotel.map((hotel) => <CardHotel key={hotel.name} data={hotel} />)}
      </div>
    </div>
  );
};

export default Hotel;
