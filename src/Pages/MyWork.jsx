import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { pageAnimation, fadeAnimation, imageAnimation, screenshotAnimation, dividerAnimation, sliderAnimation, sliderContainer } from "../animation";

import Brush from "../images/BrushStrokes.png"
import Con4 from "../images/Connect4.png";
import CSS from "../images/css-3.svg";
import Django from "../images/django.svg";
import Express from "../images/express-109.svg";
import Folio from "../images/Folio.png";
import Google from "../images/google-1-1.svg";
import HTML from "../images/html-1.svg";
import JQuery from "../images/jquery-4.svg";
import JS from "../images/logo-javascript.svg";
import Mongo from "../images/mongodb-icon-1.svg";
import Music from "../images/MusicPlayer.png"
import Node from "../images/nodejs-icon.svg";
import Post from "../images/postgresql.svg";
import Python from "../images/python-5.svg";
import ReactImg from "../images/react-2.svg";
import Reflections from "../images/Reflections.png";
import SASS from "../images/sass-1.svg";

import { Logo } from "../styles"
import { useScroll } from "../components/useScroll"

const MyWork = () => {

  const [element, controls] = useScroll()
  const [element2, controls2] = useScroll()
  const [element3, controls3] = useScroll()
  const [element4, controls4] = useScroll()

  return (
    <Work
      style={{ background: "lightgrey" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={sliderAnimation}></Frame1>
        <Frame2 variants={sliderAnimation}></Frame2>
        <Frame3 variants={sliderAnimation}></Frame3>
        <Frame4 variants={sliderAnimation}></Frame4>
      </motion.div>

          <Project variants={imageAnimation}>
            <motion.h2 variants={fadeAnimation}>Connect 4 Browser Game</motion.h2>
            <motion.div variants={dividerAnimation} className="divider"></motion.div>
            <p>My first project - a browser verison of the classic Connect4 game.</p>
            <Logo className="Logo" src={JS} alt="JS Logo"/>
            <Hide>
              <Screenshot variants={screenshotAnimation} src={Con4} alt="Connect 4" />
            </Hide>
          </Project>

          <Project ref={element} variants={imageAnimation} animate={controls} initial="hidden">
            <motion.h2 variants={fadeAnimation}>Brush Strokes</motion.h2>
            <motion.div variants={dividerAnimation} className="divider"></motion.div>
            <p>This is a MEN stack application designed to be a platform where users could share their favorite artists and pieces. I also used Google Authentication in this application.</p>
            <Logo className="Logo" src={HTML} alt="HTML Logo"/>
            <Logo className="Logo" src={CSS} alt="CSS Logo"/>
            <Logo className="Logo" src={JS} alt="JS Logo"/>
            <Logo className="Logo" src={Mongo} alt="MongoDB Logo"/>
            <Logo className="Logo" src={Google} alt="Google Logo" style={{ width: "11vw" }}/>
            <Hide>
              <Screenshot variants={screenshotAnimation} src={Brush} alt="Artwork website" />
            </Hide>
          </Project>

          <Project ref={element2} variants={imageAnimation} animate={controls2} initial="hidden">
            <motion.h2 variants={fadeAnimation}>Reflections</motion.h2>
            <motion.div variants={dividerAnimation} className="divider"></motion.div>
            <p>This application is designed to be a place for individuals to jot down and store their memories. I created a custom logo for this project using ProCreate.</p>
            <Logo className="Logo" src={HTML} alt="HTML Logo"/>
            <Logo className="Logo" src={CSS} alt="CSS Logo"/>
            <Logo className="Logo" src={JS} alt="JS Logo"/>
            <Logo className="Logo" src={JQuery} alt="JQuery Logo"/>
            <Logo className="Logo" src={Python} alt="Python Logo"/>
            <Logo className="Logo" src={Django} alt="Django Logo"/>
            <Logo className="Logo" src={Post} alt="PostgreSQL Logo"/>
            <Hide>
              <Screenshot variants={screenshotAnimation} src={Reflections} alt="Reflections website" />
            </Hide>
          </Project>

          <Project ref={element3} variants={imageAnimation} animate={controls3} initial="hidden">
            <motion.h2 variants={fadeAnimation}>Music Player</motion.h2>
            <motion.div variants={dividerAnimation} className="divider"></motion.div>
            <p>This was the first React single page application that I created. This is also the first time I used SASS.</p>
            <Logo className="Logo" src={HTML} alt="HTML Logo"/>
            <Logo className="Logo" src={CSS} alt="CSS Logo"/>
            <Logo className="Logo" src={SASS} alt="SASS Logo"/>
            <Logo className="Logo" src={JS} alt="JS Logo"/>
            <Logo className="Logo" src={ReactImg} alt="React Logo"/>
            <Hide>
              <Screenshot variants={screenshotAnimation} src={Music} alt="music player website" />
            </Hide>
          </Project>

          <Project ref={element4} variants={imageAnimation} animate={controls4} initial="hidden">
            <motion.h2 variants={fadeAnimation}>Folio</motion.h2>
            <motion.div variants={dividerAnimation} className="divider"></motion.div>
            <p>Full MERN stack application built with a team of myself and 3 others. This application is for freelanceers to utilize as a tool to keep their work, clients and themselves organized.</p>
            <Logo className="Logo" src={HTML} alt="HTML Logo"/>
            <Logo className="Logo" src={CSS} alt="CSS Logo"/>
            <Logo className="Logo" src={SASS} alt="SASS Logo"/>
            <Logo className="Logo" src={JS} alt="JS Logo"/>
            <Logo className="Logo" src={Mongo} alt="<MongoDB> Logo"/>
            <Logo className="Logo" src={Express} alt="Express Logo" style={{background: "white", width: "10vw"}}/>
            <Logo className="Logo" src={ReactImg} alt="React Logo"/>
            <Logo className="Logo" src={Node} alt="Node.js Logo"/>
            <Hide>
              <Screenshot variants={screenshotAnimation} src={Folio} alt="Folio website homepage" />
            </Hide>
          </Project>     
    </Work>
  )
}

const Work = styled(motion.div)`
  display: block;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  p {
    padding-top: 1rem;
  }
  .divider {
    background: #cccccc;
    height: 0.2rem; 
    margin: 2rem 0;
    width: 100%;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`

const Project = styled(motion.div)`
  padding-bottom: 1rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`

const Screenshot = styled(motion.img) `
  width: 100%;
  height: 100vh;
  margin-left: auto;
  object-fit: cover;
  overflow-y: scroll;
  padding-top: 2rem;
  padding-bottom: 4rem;
`

const Hide = styled.div `
  overflow: hidden;
`

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: blue;
  z-index: 2;
`

const Frame2 = styled(Frame1)`
  background: green;
`

const Frame3 = styled(Frame1)`
  background: lightBlue;
`

const Frame4 = styled(Frame1)`
  background: lightGreen;
`

export default MyWork