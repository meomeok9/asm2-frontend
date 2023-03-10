import { Fragment, useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
// import { hotelActions } from "../../store/hotel-action";
import Button from "../Button/Button";
import Navi from "../navibar/Navi";
import Navicon from "../navibar/Navicon";
import "./Detail.css";

const Detail = () => {
  const params = useParams();
  const id = params._id;
  const [data, setData] = useState();
  //   console.log(id);
  const { sendGetRequest } = useFetch();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  useEffect(() => {
    const getData = (data) => {
      //   console.log(data);
      setData(data);
    };
    sendGetRequest(`/hotel?_id=${id}`, getData);
  }, [id, sendGetRequest]);

  const bookHandler = () => {
    navigate(`/book/${id}`);
  };
  return (
    <Fragment>
      <Navi />
      {data && (
        <div className="dt_containner">
          <h1>{data.name}</h1>
          <p>
            <Navicon name="faLocationDot" />
            {data.address}
          </p>
          <p className="detail_location">
            Excellent location -{data.distance}m from center
          </p>
          <p className="detail_price">
            Book a stay over ${data.cheapestPrice} at this property{" "}
            {data.featured ? "and get free airport taxi" : ""}
          </p>
          <div className="detail_photos">
            {data.photos.map((d) => (
              <img src={d} alt={d} key={d} />
            ))}
          </div>

          <div className="detail_desc">
            <div className="desc_container">
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
            </div>
            <div className="detail_book">
              <div>
                <b>
                  <p>${data.cheapestPrice}</p>
                </b>
                <p>(1 night)</p>
              </div>
              <Button name="Reseve or Book Now!" onClick={bookHandler} />
            </div>
          </div>
        </div>
      )}
      {!data && <h1>Loading ....</h1>}
    </Fragment>
  );
};

export default Detail;
