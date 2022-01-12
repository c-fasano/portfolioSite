import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, screenshotAnimation } from "../animation";
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
      <StyledSocials variants={screenshotAnimation}>
      <div className="direct">
          <Logo className="logo" src={Email} alt="Email Icon"/>
        </div>
        <div className="info">
          <h4>cole.fasano5@gmail.com</h4>
        </div>
        <div className="direct">
          <Logo className="logo" src={Phone} alt="Phone Icon"/>
        </div>
        <div className="info">
          <h4>(848) 202-5852</h4>
        </div>
          <p>Click to view my profiles or my resume</p>
        <div className="link">
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
  text-align: center;
`

const Hide = styled.div `
  overflow: hidden;
`

const StyledSocials = styled(motion.div) `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .direct {
    padding-bottom: 2rem;
  }
  .link {
    padding-bottom: 2rem;
  }
  .info {
    padding-bottom: 2rem;
  }
  p {
    font-family: 'Roboto', sans-serif;
  }

  @media (max-width: 1500px) {
    .link {
      img {
        width: 15vw;
      }
    }
    .direct {
      img {
        width: 15vw;
      }
    }
  }

  @media (max-width: 900px) {
    .link {
      img {
        width: 25vw;
      }
    }
    .direct {
      img {
        width: 25vw;
      }
    }
  }



  @media (max-width: 450px) {
    .link {
      img {
        width: 25vw;
      }
    }
    .direct {
      img {
        width: 25vw;
      }
    }
  }
`

export default ContactMe