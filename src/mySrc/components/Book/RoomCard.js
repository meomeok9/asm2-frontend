import "./RoomCard.css";
const RoomCard = (props) => {
  const data = props.data;
  // console.log(data);
  const changeHandler = (e) => {
    if (e.target.checked) {
      props.onCheck(data, e.target.value);
    } else {
      props.onUnCheck(data, e.target.value);
    }
  };
  return (
    <div className="roomCard_container">
      <div className="roomCard_detail">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
        <p>
          Max People: <strong>{data.maxPeople}</strong>
        </p>
        <b>
          <p>${data.price}</p>
        </b>
      </div>
      <div className="roomCart_checkbox">
        {data.roomNumbers.map((r) => (
          <div key={r.roomName}>
            <p className={r.avaiable? "" : "redtext"}>{r.roomName}</p>
            <input
              type="checkbox"
              value={r.roomName}
              onChange={changeHandler}
              disabled={!r.avaiable}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RoomCard;
