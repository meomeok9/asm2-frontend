import useConvertDate from "../../hooks/useConvertDate";
import HeadCard from "../TransactionHead/HeadCard";
import "./TransactionDetail.css";

const TransactionDetail = (props) => {
  const data = props.data;
  const date = `${useConvertDate(data.dateStart)} - ${useConvertDate(
    data.dateEnd
  )}`;
  let rooms = data.rooms.reduce((pre, cur) => pre + ", " + cur.roomNumber, "");
  rooms = rooms.substring(1);

  return (
    <div className="head_container23">
      <HeadCard isHead={false} title={props.num} width="2%" />
      <HeadCard isHead={false} title={data.hotelName} width="25%" />
      <HeadCard isHead={false} title={rooms} width="10%" />
      <HeadCard isHead={false} title={date} width="20%" />
      <HeadCard isHead={false} title={data.price} width="8%" />
      <HeadCard isHead={false} title={data.payment} width="10%" />
      <HeadCard isHead={false} status={true} title={data.status} width="10%" />
    </div>
  );
};
export default TransactionDetail;
