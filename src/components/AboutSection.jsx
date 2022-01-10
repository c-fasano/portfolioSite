import React from "react";
import styled from "styled-components";
import self from "../images/Picture1.png";

import { StyledAbout, StyledDescription, StyledImage, Hide } from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <Hide>
            <h2>Hello There!</h2>
          </Hide>
          <Hide>
            <h2>I am <span>Cole Fasano</span></h2>
          </Hide>
          <Hide>
            <h2>Welcome to my Portfolio</h2>
          </Hide>
        </div>
        <p>I am a full stack developer based in Peoria, Illinois. I am driven by delivering work that pleases both visually and functionally. </p>
        <button>Contact Me</button> 
      </StyledDescription>
      <StyledImage>
        <img src={self} alt="Sitting down in chair Black and White" style={{width: "85%"}}/>
      </StyledImage>
    </StyledAbout>
  )
}

export default AboutSection