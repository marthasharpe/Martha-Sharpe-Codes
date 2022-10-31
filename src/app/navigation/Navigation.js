import React from "react";
import FontAwesome from "react-fontawesome";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-container">
      <a
        href="https://www.linkedin.com/in/marthasharpe2020/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesome name="linkedin" size="2x" className="social-link" />
      </a>
      <a
        href="https://twitter.com/SharpeMartha"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesome name="twitter" size="2x" className="social-link" />
      </a>
      <a
        href="https://github.com/marthasharpe"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesome name="github" size="2x" className="social-link" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCqL_YXyK5g7rr4MmhqVCAGA"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesome name="youtube" size="2x" className="social-link" />
      </a>
    </nav>
  );
};

export default Navigation;
