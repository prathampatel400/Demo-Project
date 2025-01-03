import React from "react";
import "./Registration.scss";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div className="container1">
        <h1>Registration</h1>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button
          onClick={() => {
            alert("Registered Successfully");
          }}
        >
          Submit
        </button>
        <div className="context">
          <p>if User Already Registered</p>
          <Link to="/Signin">
            <button>Signin</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Registration;
