import React from "react";
import styled from "styled-components";
import self from "../images/Picture1.png";

const AboutSection = () => {
  return (
    <div>
      <StyledDescription>
        <div className="title">
          <div className="hidden">
            <h2>Hello There!</h2>
          </div>
          <div className="hidden">
            <h2>I am Cole Fasano</h2>
          </div>
          <div className="hidden">
            <h2>Welcome to my <span>Portfolio</span></h2>
          </div>
        </div>
        <button>Contact Me</button> 
      </StyledDescription>
      <div className="image">
        <img src={self} alt="Sitting down in chair Black and White" />
      </div>
    </div>
  )
}

//Styled Components

const StyledDescription = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

export default AboutSection