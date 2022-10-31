import React from "react";
import resume from "../../assets/MarthaSharpeResume.pdf";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I am a self-taught developer specializing in frontend technologies
          like JavaScript, React, and React Native. I love writing quality code,
          learning new technologies, and solving complex problems.
        </p>
        <p>
          <a href={resume} rel="noopener noreferrer" target="_blank">
            Resume
          </a>{" "}
          /{" "}
          <a
            href="https://www.youtube.com/channel/UCqL_YXyK5g7rr4MmhqVCAGA"
            rel="noopener noreferrer"
            target="_blank"
          >
            YouTube
          </a>{" "}
          /{" "}
          <a
            href="https://marthasharpe.gumroad.com/l/teach-yourself-to-code"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ebook
          </a>
        </p>
      </div>
      <div className="technologies">
        <h2>Technologies</h2>
        <p>
          JavaScript | TypeScript | React | React Native | Redux | GraphQL |
          REST | Git | GitHub | Jest
        </p>
      </div>
    </div>
  );
};

export default About;
