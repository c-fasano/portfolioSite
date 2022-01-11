import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";

import Email from "../images/email.svg"
import Git from "../images/github-icon-1.svg"
import Linked from "../images/linkedin-icon.svg"
import Phone from "../images/phone.svg"
import Resume from "../images/resume.svg"

import { Logo } from "../styles";

const ContactMe = () => {
  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "grey" }}
    >
      <StyledTitle>
        <Hide>
          <motion.h2 variants={titleAnimation}>Here's where you can find me</motion.h2>
        </Hide>
      </StyledTitle>
      <StyledSocials>
        <div className="direct">
          <Logo className="logo" src={Email} alt="Email Icon"/>
          <h4>cole.fasano5@gmail.com</h4>
        </div>
        <div className="direct">
          <Logo className="logo" src={Phone} alt="Phone Icon"/>
          <h4>(848) 202-5852</h4>
        </div>
        <div className="link">
          <p>Click to view my profiles or my resume</p>
          <a href ="https://github.com/c-fasano"><Logo className="logo" src={Git} alt="GitHub Logo"/></a>
        </div>
        <div className="link">
        <a href ="https://www.linkedin.com/in/cole-fasano/"><Logo className="logo" src={Linked} alt="LinkedIn Logo"/></a>
        </div>
        <div className="link">
        <a href ="https://1drv.ms/w/s!AtMrn_Aqi-eujAfx9SKtfstXQOGs?e=wac9d7"><Logo className="logo" src={Resume} alt="Resume Icon"/></a>
        </div>
      </StyledSocials>
    </StyledContact>
  )
}

const StyledContact = styled(motion.div) `
  padding: 5rem 10rem;
  color: blue;
  min-height: 90vh;
`

const StyledTitle = styled.div `
  margin-bottom: 4rem;
  color: white;
`

const Hide = styled.div `
  overflow: hidden;
`

const StyledSocials = styled(motion.div) `
  display: flex;
  flex-direction: column;
  .direct {
    padding-bottom: 2rem;
  }
  .link {
    padding-bottom: 2rem;
  }
`

export default ContactMe