import "./Head.css";
import HeadForm from "./HeadForm";
const Head = () => {
  return (
    <div>
      <div className="head_container">
        <h1>A lifetime of discounts? It's Guinus</h1>
        <h3>
          Get Rewarded for your travels - unlock instant saving of 10% or more
          with free account
        </h3>
        <div className="link_container">
          <a href="#" className="head_a">
            Sign in
          </a>
          /
          <a href="#" className="head_a">
            Register
          </a>
        </div>
      </div>
      <HeadForm></HeadForm>
    </div>
  );
};
export default Head;
