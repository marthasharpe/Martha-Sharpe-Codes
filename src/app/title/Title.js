import React from "react";
import pic from "../../assets/new-profile-pic.jpg";
import "./Title.css";

const Title = () => {
  return (
    <div className="title-container">
      <img src={pic} className="profile-pic" alt="profile" />
      <h1>Martha Sharpe</h1>
      <h3>Software Engineer</h3>
    </div>
  );
};

export default Title;
