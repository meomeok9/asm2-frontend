import { Link, useNavigate } from "react-router-dom";
import Rate from "../Rate/Rate";
import "./CardHotel.css";

const CardHotel = (props) => {
  const data = props.data;
  const navigate = useNavigate();
  const hotelClickHandler = () => {
    navigate("/detail");
  };
  const errorHandler = (e) => {
    if (e.target.src === data.photos[0]) {
      e.target.src = data.photos[1];
      return;
    }
    if (e.target.src === data.photos[1]) {
      e.target.src = data.photos[2];
      return;
    }
    if (e.target.src === data.photos[2]) {
      e.target.src = data.photos[3];
      return;
    }
    if (e.target.src === data.photos[3]) {
      e.target.src = data.photos[4];
      return;
    }
  };

  return (
    <div className="hotel_container">
      <img
        onClick={hotelClickHandler}
        className="hotel_img"
        src={data.photos[0]}
        alt={data.name}
        onError={errorHandler}
      />
      <div>
        <Link className="hotel_link" to={`/detail/${data._id}`} >{data.name}</Link>
        <p className="hotel_para">{data.city}</p>
        <p>
          <strong>Starting from ${data.cheapestPrice}</strong>
        </p>
        {/* <div className="span_container">
          <Rate>{data.rate}</Rate>
          <p>{data.type}</p>
        </div> */}
      </div>
    </div>
  );
};
export default CardHotel;
