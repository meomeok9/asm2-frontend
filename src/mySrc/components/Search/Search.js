import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CardHotel from "../Hotel/CardHotel";
import Navi from "../navibar/Navi";
import "./Search.css";
const Search = () => {
  const location = useLocation().search;
  const searchUrl = new URLSearchParams(location);
  const [data, setData] = useState();
  const { sendPostRequest } = useFetch();
  const city = searchUrl.get("city");
  const dateStart = searchUrl.get("dateStart");
  const dateEnd = searchUrl.get("dateEnd");
  const maxPeople = searchUrl.get("maxPeople");
  const rooms = searchUrl.get("rooms");
  useEffect(() => {
    const getData = (data, message) => {
      setData(data);
      //   console.log(data);
      if (message !== "SUCESS") alert(message);
    };
    sendPostRequest(
      "/user/search",
      {
        city,
        dateStart,
        dateEnd,
        maxPeople,
        rooms,
      },
      getData
    );
  }, [city, dateStart, dateEnd, maxPeople, rooms, sendPostRequest]);
  return (
    <Fragment>
      <Navi />
      <div className="search_result">
        {data &&
          data.length > 0 &&
          data.map((hotel) => <CardHotel key={hotel.name} data={hotel} />)}
        {data && data.length === 0 && <h1>No Hotel found!</h1>}
        {!data && <h1>Loading...</h1>}
      </div>
    </Fragment>
  );
};
export default Search;
