import { useState } from "react";

import Button from "../Button/Button";
import "./LoginForm.css";
import { loginActions } from "../../store/login-action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [name, setName] = useState();
  const [pw, setPw] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameInputChange = (e) => {
    if (e.target.value.trim().length !== "") setName(e.target.value);
  };

  const pwInputChange = (e) => {
    if (e.target.value.trim().length !== "") setPw(e.target.value);
  };
  const submitHanler = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      body: JSON.stringify({
        userName: name,
        pw: pw,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.message === "SUCCESS") {
          dispatch(
            loginActions.onLogin({
              userName: res.results.fullName,
              email: res.results.email,
              phone: res.results.phoneNumber,
              id: res.results._id,
            })
          );
          navigate("/");
        } else {
          alert("Please check your login information.");
        }
      });
  };
  return (
    <form onSubmit={submitHanler} className="login_form">
      <div>
        <h1>LOGIN</h1>
      </div>
      <div>
        <div className="login_row">
          <p>User Name</p>
          <input
            type="text"
            placeholder="Enter Login Name"
            onChange={nameInputChange}
          />
        </div>
        <div className="login_row">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={pwInputChange}
          />
        </div>
      </div>
      <div>
        <Button name="Login" type="submit" />
      </div>
    </form>
  );
};
export default LoginForm;
