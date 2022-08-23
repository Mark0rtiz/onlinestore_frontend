import "./aboutme.css";
import { useState } from "react";

const AboutMe = () => {
  const [name, setName] = useState("");

  const toggleName = () => {
    setName("Mark Ortiz");
  };

  return (
    <div className="about-me">
      <h2>Welcome to Mark's Electronics!</h2>
      <h5>{name}</h5>

      <button className="about-me-button" onClick={toggleName}>
        Show
      </button>
    </div>
  );
};

export default AboutMe;
