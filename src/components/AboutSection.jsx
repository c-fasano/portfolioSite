import React from "react";
import self from "../images/Picture1.png";

import { motion } from "framer-motion";

import { StyledAbout, StyledDescription, StyledImage, Hide } from "../styles";

const AboutSection = () => {

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <Hide>
            <motion.h2>Hello There!</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>I'm <span>Cole Fasano</span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2>Welcome to my Portfolio</motion.h2>
          </Hide>
        </motion.div>
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