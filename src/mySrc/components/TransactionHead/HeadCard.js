import { Fragment } from "react";
import "./HeadCard.css";
const HeadCard = (props) => {
  const isHead = props.isHead;
  const status = props.status;
  return (
    <Fragment>
      {!status && (
        <div
          className={`${
            isHead ? "headcard2" : "detailcard"
          } headCard2_container`}
          style={{ width: props.width }}
        >
          <p>{props.title}</p>
        </div>
      )}
      {status && props.title === "Booked" && (
        <div
          className={`${
            isHead ? "headcard2" : "detailcard"
          } headCard2_container`}
          style={{ width: props.width }}
        >
          <div className="booked"><p>{props.title}</p></div>
        </div>
      )}
      {status && props.title === "Checkout" && (
        <div
          className={`${
            isHead ? "headcard2" : "detailcard"
          } headCard2_container`}
          style={{ width: props.width }}
        >
          <div className="checkout"><p>{props.title}</p></div>
        </div>
      )}
      {status && props.title === "Checkin" && (
        <div
          className={`${
            isHead ? "headcard2" : "detailcard"
          } headCard2_container`}
          style={{ width: props.width }}
        >
          <div className="checkin"><p>{props.title}</p></div>
        </div>
      )}
    </Fragment>
  );
};
export default HeadCard;
