import React from "react";
import styled from "styled-components";

import CSS from "../images/CSS.png";
import HTML from "../images/HTML.png";
import JS from "../images/JS.png";
import Node from "../images/Node.png";
import Python from "../images/Python.png";
import ReactImg from "../images/React.png";
import Redux from "../images/Redux.png"
import SASS from "../images/SASS.png";
import Stack from "../images/Stack.jpg"

const SkillsSection = () => {
  return (
    <div className="skills">
      <div className="description">
        <h2>Full <span>Stack</span>Developer</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <Logo className="Logo" src={HTML} alt="HTML Logo"/>
              <Logo className="Logo" src={CSS} alt="CSS Logo"/>
              <Logo className="Logo" src={SASS} alt="SASS Logo"/>
              <h3>Layout & Design</h3>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <Logo className="Logo" src={JS} alt="JS Logo"/>
              <Logo className="Logo" src={Python} alt="Python Logo"/>
              <h3>OOP</h3>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <Logo className="Logo" src={Node} alt="Node.js Logo"/>
              <h3>Backend</h3>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <Logo className="Logo" src={ReactImg} alt="React Logo"/>
              <Logo className="Logo" src={Redux} alt="Redux Logo"/>
              <h3>Libraries</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="image">

      </div>
    </div>
  )
}

const Logo = styled.img`
  width: 3vw;
`

export default SkillsSection