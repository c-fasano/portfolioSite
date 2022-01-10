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

import { StyledAbout, StyledDescription, StyledImage, Hide } from "../styles";

const SkillsSection = () => {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>Full <span>Stack</span>Developer</h2>
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
              <Logo className="Logo" src={Python} alt="Python Logo"/>         
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Node} alt="Node.js Logo"/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={ReactImg} alt="React Logo"/>         
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Redux} alt="Redux Logo"/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Express} alt="Redux Logo" style={{background: "white", marginTop: "30%"}}/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Mongo} alt="Redux Logo"/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={Django} alt="Redux Logo"/>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <Logo className="Logo" src={JQuery} alt="Redux Logo"/>
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

const Logo = styled.img`
  width: 5vw;
  margin: 0 0.5rem;
`

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`

const StyledCards = styled.div `
  display: flex;
  flex-wrap: wrap;
`

const StyledCard = styled.div `
  flex-basis: 4rem;
  padding: 3rem 2rem 1rem 0;
  .icon {
      display: flex;
      align-items: center;
    h3 {
      padding-bottom: 1rem;
      background: white;
      color: black;
    }
  }
`

export default SkillsSection