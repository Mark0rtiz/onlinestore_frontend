import "./aboutme.css";
import { useState } from "react";

const AboutMe = () => {
  const [name, setName] = useState("");

  const toggleName = () => {
    setName("Mark Ortiz");
  };

  return (
    <div className="about-me">
      <h4>Welcome</h4>
      <h5>{name}</h5>

      <button onClick={toggleName}>Show</button>
    </div>
  );
};

export default AboutMe;
