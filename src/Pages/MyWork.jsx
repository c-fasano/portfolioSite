import React from "react";
import styled from "styled-components";

import CSS from "../images/css-3.svg";
import Django from "../images/django.svg";
import Express from "../images/express-109.svg"
import Google from "../images/google-1-1.svg"
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

import { Logo, StyledAbout } from "../styles"

const MyWork = () => {
  return (
    <div>
      <h1>My Work</h1>
      <StyledProjects>
        <div className="project">
          <h2>Connect 4 Browser Game</h2>
          <p>Here's a description of connect 4! :l</p>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <div className="divider"></div>
        </div>
        <div className="project">
          <h2>Brush Strokes</h2>
          <p>Well this one was fun</p>
          <Logo className="Logo" src={HTML} alt="HTML Logo"/>
          <Logo className="Logo" src={CSS} alt="CSS Logo"/>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <Logo className="Logo" src={Mongo} alt="MongoDB Logo"/>
          <Logo className="Logo" src={Google} alt="Google Logo" style={{ width: "11vw" }}/>
          <div className="divider"></div>
        </div>
        <div className="project">
          <h2>Reflections</h2>
          <p>Here's a description of connect 4! :l</p>
          <Logo className="Logo" src={HTML} alt="HTML Logo"/>
          <Logo className="Logo" src={CSS} alt="CSS Logo"/>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <Logo className="Logo" src={JQuery} alt="JQuery Logo"/>
          <Logo className="Logo" src={Python} alt="Python Logo"/>
          <Logo className="Logo" src={Django} alt="Django Logo"/>
          <div className="divider"></div>
        </div>
        <div className="project">
          <h2>Music Player</h2>
          <p>Here's a description of connect 4! :l</p>
          <Logo className="Logo" src={HTML} alt="HTML Logo"/>
          <Logo className="Logo" src={CSS} alt="CSS Logo"/>
          <Logo className="Logo" src={SASS} alt="SASS Logo"/>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <Logo className="Logo" src={ReactImg} alt="React Logo"/>
          <div className="divider"></div>
        </div>
        <div className="project">
          <h2>Connect 4 Browser Game</h2>
          <p>Here's a description of connect 4! :l</p>
          <Logo className="Logo" src={HTML} alt="HTML Logo"/>
          <Logo className="Logo" src={CSS} alt="CSS Logo"/>
          <Logo className="Logo" src={SASS} alt="SASS Logo"/>
          <Logo className="Logo" src={JS} alt="JS Logo"/>
          <Logo className="Logo" src={Mongo} alt="<MongoDB> Logo"/>
          <Logo className="Logo" src={Express} alt="Express Logo" style={{background: "white", width: "10vw"}}/>
          <Logo className="Logo" src={ReactImg} alt="React Logo"/>
          <Logo className="Logo" src={Node} alt="Node.js Logo"/>
          <div className="divider"></div>
        </div>
      </StyledProjects>
    </div>
  )
}

const StyledProjects = styled(StyledAbout)`
  display: block;
  h2 {
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

export default MyWork