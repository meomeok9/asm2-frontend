
import "./Rate.css";
const Rate = (props) => {
  const classes = "rate " + props.className;
  return <span className={classes}>{props.children}</span>;
};
export default Rate;
