import React, { useState } from "react";
import "../style/Signup.css";

const Signup = ({ onClose }) => {
  const [signupData, setSignupData] = useState({});
  const [UserImage, setUserImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupData);
    console.log(UserImage);
  };
  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
  return (
    <div className="container2">
      <button className="closeBtn" onClick={onClose}>
        x
      </button>
      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your UserName"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="username"
            placeholder="Enter password again"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input">
          <label htmlFor="">Profile Image</label>
          <input
            type="file"
            name="userImage"
            onChange={(e) => setUserImage(e.target.files[0])}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
