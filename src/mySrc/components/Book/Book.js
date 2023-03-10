import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Button from "../Button/Button";
import CustDateRange from "../DateRange/CustDateRange";
import Navi from "../navibar/Navi";
import "./Book.css";
import RoomCard from "./RoomCard";
const Book = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [IDCard, setIDCard] = useState();
  const [payment, setPayment] = useState();
  const [rooms, setRooms] = useState([]);
  const [bill, setBill] = useState(0);
  const params = useParams();
  const id = params._id;
  const [data, setData] = useState();
  const { sendGetRequest } = useFetch();
  const fn = useSelector((state) => state.login.userName);
  const em = useSelector((state) => state.login.email);
  const pn = useSelector((state) => state.login.phone);
  const navigate = useNavigate();

  const userId = useSelector((state) => state.login.id);
  useEffect(() => {
    setFullName(fn);
    setEmail(em);
    setPhone(pn);
  }, []);
  // const testlist = ["101", "201", "404"];
  // const newarr= testlist.map((t) => new Object({ tname: t, avaable: true }));
  // console.log(newarr);
  // useEffect(() => {
  //   const getData = (data) => {
  //     // console.log(data);
  //     setData(data);
  //   };
  //   sendGetRequest(`/rooms?_id=${id}`, getData);
  // }, [id, sendGetRequest]);

  const setDate = (data) => {
    const arr = data.split(" to ");
    setStartDate(new Date(arr[0]));
    setEndDate(new Date(arr[1]));
    setBill(0);

    const getData = (data) => {
      setData(data);
      console.log(data);
    };
    sendGetRequest(
      `/rooms?_id=${id}&dateStart=${arr[0]}&dateEnd=${arr[1]}`,
      getData
    );
  };
  const addSelectedRooms = (room, roomNumber) => {
    rooms.push({ roomId: room._id, roomNumber: roomNumber });
    setRooms(rooms);
    console.log("Rooms :", rooms);
    const days = 1 + (endDate.getTime() - startDate.getTime()) / 86400000;
    setBill(bill + days * room.price);
    // console.log(rooms);
  };
  const removeSelectedRooms = (room, roomNumber) => {
    const index = rooms.findIndex(
      (r) => r.roomId === room._id && r.roomNumber === roomNumber
    );
    rooms.splice(index, 1);
    setRooms(rooms);
    // console.log(rooms);
    const days = 1 + (endDate.getTime() - startDate.getTime()) / 86400000;
    setBill(bill - days * room.price);
  };

  const paymentHandler = (e) => {
    if (e.target.value !== "") {
      setPayment(e.target.value);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (rooms.length === 0) {
      alert("Please Select Room !!!");
      return;
    }
    if (!payment) {
      alert("Please Select Payment Method !!!");
      return;
    }
    if (userId === "") {
      alert("Please Login !!!!");
      return;
    }
    fetch("http://localhost:5000/user/book", {
      method: "POST",
      body: JSON.stringify({
        user: userId,
        hotel: id,
        rooms: rooms,
        dateStart: startDate,
        dateEnd: endDate,
        price: bill,
        payment: payment,
        status: "Booked",
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.message === "SUCCESS") {
          navigate(`/transaction/${userId}`);
        } else {
          alert("Please check your information.");
        }
      });
  };

  return (
    <div>
      <Navi />
      <form onSubmit={submitHandler}>
        <div className="book_info">
          <div>
            <h2>Date</h2>
            <CustDateRange onClick={setDate} />
          </div>
          <div className="info_book">
            <h2>Reseve Info</h2>
            <p>Your Full Name</p>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => {
                if (e.target.value.trim().length > 0)
                  setFullName(e.target.value);
              }}
              value={fullname}
            />
            <p>Your Email</p>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                if (e.target.value.trim().length > 0) setEmail(e.target.value);
              }}
              value={email}
            />
            <p>Your Phone Number</p>
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => {
                if (e.target.value.trim().length > 0) setPhone(e.target.value);
              }}
              value={phone}
            />
            <p>Your Identity Card Number</p>
            <input
              type="text"
              placeholder="Identity Card Number"
              onChange={(e) => {
                if (e.target.value.trim().length > 0) setIDCard(e.target.value);
              }}
            />
          </div>
        </div>
        <h2>Select Rooms</h2>
        <div className="allroomcard">
          {data &&
            data.map((d) => (
              <RoomCard
                data={d}
                key={d._id}
                onCheck={addSelectedRooms}
                onUnCheck={removeSelectedRooms}
              />
            ))}
        </div>

        <div className="book_method">
          <div>
            <h2>
              Total Bill: $<span className="bill_sp">{bill}</span>
            </h2>
            <select onChange={paymentHandler}>
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
          <div>
            <Button type="submit" name="Reseve Now" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Book;
