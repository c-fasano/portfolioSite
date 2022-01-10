import React from "react";
import styled from "styled-components";
import self from "../images/Picture1.png";

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

//Styled Components

const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

const StyledDescription = styled.div `
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`

const StyledImage = styled.div `
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
const Hide = styled.div `
  overflow: hidden;
`

export default AboutSection