import React from "react";
import styled from "styled-components";

import CSS from "../images/css-3.svg";
import Django from "../images/django.svg";
import Express from "../images/express-109.svg"
import HTML from "../images/html-1.svg";
import JQuery from "../images/jquery-4.svg";
import JS from "../images/logo-javascript.svg";
import Mongo from "../images/mongodb-icon-1.svg";
import Node from "../images/nodejs-icon.svg";
import Python from "../images/python-5.svg";
import ReactImg from "../images/react-2.svg";
import Redux from "../images/redux.svg"
import SASS from "../images/sass-1.svg";
import Stack from "../images/Stack.jpg";

import { StyledAbout, StyledDescription, StyledImage, Logo } from "../styles";
import { imageAnimation } from "../animation";
import { useScroll } from "./useScroll";

const SkillsSection = () => {

  const[element, controls] = useScroll()

  return (
    <StyledServices variants={imageAnimation} animate={controls} ref={element}>
      <StyledDescription>
        <h2>Full <span>Stack</span> Developer</h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={HTML} alt="HTML Logo"/>         
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={CSS} alt="CSS Logo"/>         
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={SASS} alt="SASS Logo"/>         
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={JS} alt="JS Logo"/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Mongo} alt="MongoDB Logo"/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon" style={{background: "white",}}>
              <Logo className="Logo" src={Express} alt="Express Logo" style={{background: "white", marginTop: "35%", paddingBottom: "35%"}}/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={ReactImg} alt="React Logo"/>         
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Node} alt="Node.js Logo"/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Python} alt="Python Logo"/>         
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Django} alt="Django Logo"/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Redux} alt="Redux Logo"/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={JQuery} alt="JQuery Logo"/>
            </div>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={Stack} alt="rocks stacked" style={{ width: "85%" }}/>
      </StyledImage>
    </StyledServices>
  )
}



const StyledServices = styled(StyledAbout)`
  padding: 5vh 0 5vh 5%;
  h2 {
    padding-bottom: 5rem;
  }
  @media (max-width: 1100px) {
  display: block;
  text-align: center;
}
`

const StyledCards = styled.div `
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1100px) {
    justify-content: center;
  }
`

const StyledCard = styled.div `
  flex-basis: 4rem;
  padding: 3vh 2% 1vh 0;
  .icon {
      display: flex;
      align-items: center;
    h3 {
      padding-bottom: 1rem;
      background: white;
      color: black;
    }
  }
  @media (max-width: 1100px) {
    padding: 0 5% 5% 5%;
    h2 {
      padding-bottom: 0rem;
    }
  }
`

export default SkillsSection