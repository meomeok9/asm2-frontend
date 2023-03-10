import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import Navi from "../navibar/Navi";
import TransationHead from "../TransactionHead/TransactionHead";
import "./Transaction.css";
import TransactionDetail from "./TransactionDetail";

const Transaction = () => {
  const { sendGetRequest } = useFetch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.login.id);
  const [data, setData] = useState();
  useEffect(() => {
    if (userId === "") {
      navigate("/signin");
      return;
    }
    const getData = (data) => {
      console.log(data);
      setData(data);
    };
    sendGetRequest(`/user/transaction?userId=${userId}`, getData);
  }, []);
  return (
    <div className="trans_container">
      <Navi />
      <TransationHead />
      {data &&
        data.length > 0 &&
        data.map((d, i) => (
          <TransactionDetail data={d} key={d._id} num={i + 1} />
        ))}
      {data && data.length === 0 && <h1>No transaction</h1>}
      {!data && <h1>Loading....</h1>}
    </div>
  );
};

export default Transaction;
