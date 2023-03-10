import "./Button.css";
const Button = (props) => {
  let classed = "cus_btn " + props.className;
  return (
    <button type={props.type} className={classed} onClick={props.onClick}>
      {props.name}
    </button>
  );
};
export default Button;
