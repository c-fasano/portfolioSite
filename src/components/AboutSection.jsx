import React from "react";
import self from "../images/Picture1.png"

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hidden">
            <h2>Hello There!</h2>
          </div>
          <div className="hidden">
            <h2>I am Cole Fasano</h2>
          </div>
          <div className="hidden">
            <h2><span>Full Stack</span>Developer</h2>
          </div>
        </div>
        <button>Contact Me</button> 
      </div>
      <div className="image">
        <img src={self} alt="Sitting down in chair Black and White" />
      </div>
    </div>
  )
}

export default AboutSection