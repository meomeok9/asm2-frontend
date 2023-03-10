import HeadCard from "./HeadCard";
import "./TransactionHead.css";

const TransationHead = () => {
  return (
    <div className="head_container2">
      <HeadCard isHead={true} title="#" width="2%" />
      <HeadCard isHead={true} title="Hotel" width="25%" />
      <HeadCard isHead={true} title="Room" width="10%" />
      <HeadCard isHead={true} title="Date" width="20%" />
      <HeadCard isHead={true} title="Price" width="8%" />
      <HeadCard isHead={true} title="Payment" width="10%" />
      <HeadCard isHead={true} title="Status" width="10%" />
    </div>
  );
};
export default TransationHead;
