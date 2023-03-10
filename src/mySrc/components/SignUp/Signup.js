import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Navi from "../navibar/Navi";
import "./SignUp.css";
const SignUp = () => {
  const [name, setName] = useState();
  const [pw, setPw] = useState();
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();
  const nameChangeHandler = (e) => {
    if (e.target.value.trim().length !== 0) setName(e.target.value);
  };
  const pwChangeHandler = (e) => {
    if (e.target.value.trim().length !== 0) setPw(e.target.value);
  };
  const fullNameChangeHandler = (e) => {
    if (e.target.value.trim().length !== 0) setFullName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    if (e.target.value.trim().length !== 0) setEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    if (e.target.value.trim().length !== 0) setPhoneNumber(e.target.value);
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      pw.length === 0 ||
      fullName.length === 0 ||
      email.length === 0 ||
      phoneNumber.length === 0
    ) {
      alert("Please check your sugn up information.");
      return;
    }
    fetch("http://localhost:5000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        userName: name,
        pw: pw,
        email: email,
        fullName: fullName,
        phoneNumber: phoneNumber,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.message === "SUCCESS") {
          alert("SIGN UP SUCESS.");
          navigate("/signin");
        } else {
          console.log(res);
          alert("Please check your login information.");
        }
      });
  };
  return (
    <form method="POST" onSubmit={submitHanlder} className="login_form">
      <div>
        <h1>Sign Up</h1>
      </div>
      <div>
        <div className="login_row">
          <p>User Name</p>
          <input
            type="text"
            placeholder="Enter Login Name"
            onChange={nameChangeHandler}
          />
        </div>
        <div className="login_row">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={pwChangeHandler}
          />
        </div>
        <div className="login_row">
          <p>Full Name</p>
          <input
            type="text"
            placeholder="Enter Full Name"
            onChange={fullNameChangeHandler}
          />
        </div>
        <div className="login_row">
          <p>Phone Number</p>
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="login_row">
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={emailChangeHandler}
          />
        </div>
      </div>
      <div>
        <Button name="Sign Up" type="submit" />
      </div>
    </form>
  );
};
export default SignUp;
