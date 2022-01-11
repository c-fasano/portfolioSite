import React from "react";
import { Link } from "react-router-dom";

import self from "../images/Picture1.png";

import { motion } from "framer-motion";
import { introAnimation, titleAnimation, fadeAnimation, buttonFadeAnimation, imageAnimation } from "../animation";
import Wave from "./Wave";

import { StyledAbout, StyledDescription, StyledImage, Hide } from "../styles";

const AboutSection = () => {

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div  variants={introAnimation}>
          <Hide>
            <motion.h2 variants={titleAnimation}>Hello There!</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>I'm <span>Cole Fasano</span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>Welcome to my Portfolio</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnimation}>I am a full stack developer based in Peoria, Illinois. I am driven by delivering work that pleases both visually and functionally.</motion.p>
        <Link to="/contact">
          <motion.button variants={buttonFadeAnimation}>Contact Me</motion.button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={imageAnimation} src={self} alt="Sitting down in chair Black and White" style={{width: "85%"}}/>
      </StyledImage>
      <Wave />
    </StyledAbout>
  )
}

export default AboutSection