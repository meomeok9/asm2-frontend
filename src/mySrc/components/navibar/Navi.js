import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ListButton from "./ListButton";
import "./Navi.css";
import { loginActions } from "../../store/login-action";
const Navi = () => {
  const user = useSelector((state) => state.login.userName);
  const userId = useSelector((state) => state.login.id);
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginActions.onLogOut());
    navigate("/");
  };
  return (
    <div className="nav_container">
      <div className="nav_top">
        <Link to="/" className="nav_a">
          Booking Website
        </Link>
        {!isLogin && (
          <div>
            <button
              className="nav_btn--top"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
            <button
              className="nav_btn--top"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login
            </button>
          </div>
        )}
        {isLogin && (
          <div className="wc_container">
            <p className="nav_wc">Welcome {user}</p>
            <button
              className="nav_btn--top"
              onClick={() => {
                navigate(`/transaction/${userId}`);
              }}
            >
              Transaction
            </button>
            <button className="nav_btn--top" onClick={logoutHandler}>
              Log Out
            </button>
          </div>
        )}
      </div>
      <ListButton />
    </div>
  );
};
export default Navi;
