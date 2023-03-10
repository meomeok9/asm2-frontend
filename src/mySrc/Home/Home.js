import { useEffect } from "react";
import { useDispatch } from "react-redux";
import City from "../components/City/City";
import Hotel from "../components/Hotel/Hotel";
import Head from "../components/navibar/Head";
import Navi from "../components/navibar/Navi";
import Type from "../components/Type/Type";
import useFetch from "../hooks/useFetch";
import { hotelActions } from "../store/hotel-action";
const Home = () => {
  const { sendGetRequest } = useFetch();
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = (data) => {
      data.sort((a, b) => +b.rating - +a.rating);
      const top3ratingHotel = data.filter((h, i) => i <= 2);
      dispatch(hotelActions.onLoad({ hotels: data, top3: top3ratingHotel }));
    };
    sendGetRequest("/allHotels", getData);
  }, []);
  return (
    <div>
      <Navi />
      <Head />
      <City />
      <Type />
      <Hotel />
      {/* <Register />
      <Footer />  */}
    </div>
  );
};

export default Home;
