import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

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

import { Logo, StyledAbout } from "../styles"

const MyWork = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <h1>My Work</h1>
      <StyledProjects>
        <div className="project">
          <h2>Connect 4 Browser Game</h2>
          <p>My first project - a browser verison of the classic Connect4 game.</p>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <Screenshot src={Con4} alt="Connect 4" />
          <div className="divider"></div>
        </div>
        <div className="project">
          <h2>Brush Strokes</h2>
          <p>This is a MEN stack application designed to be a platform where users could share their favorite artists and pieces. I also used Google Authentication in this application.</p>
          <Logo className="Logo" src={HTML} alt="HTML Logo"/>
          <Logo className="Logo" src={CSS} alt="CSS Logo"/>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <Logo className="Logo" src={Mongo} alt="MongoDB Logo"/>
          <Logo className="Logo" src={Google} alt="Google Logo" style={{ width: "11vw" }}/>
          <Screenshot src={Brush} alt="Artwork website" />
          <div className="divider"></div>
        </div>
        <div className="project">
          <h2>Reflections</h2>
          <p>This application is designed to be a place for individuals to jot down and store their memories. I created a custom logo for this project using ProCreate.</p>
          <Logo className="Logo" src={HTML} alt="HTML Logo"/>
          <Logo className="Logo" src={CSS} alt="CSS Logo"/>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <Logo className="Logo" src={JQuery} alt="JQuery Logo"/>
          <Logo className="Logo" src={Python} alt="Python Logo"/>
          <Logo className="Logo" src={Django} alt="Django Logo"/>
          <Logo className="Logo" src={Post} alt="PostgreSQL Logo"/>
          <Screenshot src={Reflections} alt="Reflections website" />
          <div className="divider"></div>
        </div>
        <div className="project">
          <h2>Music Player</h2>
          <p>This was the first React single page application that I created. This is also the first time I used SASS.</p>
          <Logo className="Logo" src={HTML} alt="HTML Logo"/>
          <Logo className="Logo" src={CSS} alt="CSS Logo"/>
          <Logo className="Logo" src={SASS} alt="SASS Logo"/>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <Logo className="Logo" src={ReactImg} alt="React Logo"/>
          <Screenshot src={Music} alt="music player website" />
          <div className="divider"></div>
        </div>
        <div className="project">
          <h2>Connect 4 Browser Game</h2>
          <p>Full MERN stack application built with a team of myself and 3 others. This application is for freelanceers to utilize as a tool to keep their work, clients and themselves organized.</p>
          <Logo className="Logo" src={HTML} alt="HTML Logo"/>
          <Logo className="Logo" src={CSS} alt="CSS Logo"/>
          <Logo className="Logo" src={SASS} alt="SASS Logo"/>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <Logo className="Logo" src={Mongo} alt="<MongoDB> Logo"/>
          <Logo className="Logo" src={Express} alt="Express Logo" style={{background: "white", width: "10vw"}}/>
          <Logo className="Logo" src={ReactImg} alt="React Logo"/>
          <Logo className="Logo" src={Node} alt="Node.js Logo"/>
          <Screenshot src={Folio} alt="Folio website homepage" />
          <div className="divider"></div>
        </div>
      </StyledProjects>
    </motion.div>
  )
}

const StyledProjects = styled(StyledAbout)`
  display: block;
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
`
const Screenshot = styled.img `
  width: 100%;
  height: 70vh;
  object-fit: cover;
  padding-top: 2rem;
`


export default MyWork