import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";

import { StyledAbout } from "../styles"
import { useScroll } from "./useScroll";

import { imageAnimation } from "../animation";
import Toggle from "./Toggle";

const FaqSection = () => {

  const[element, controls] = useScroll()

  return (
    <StyledFaq variants={imageAnimation} animate={controls} ref={element}>
      <h2>More About <span>Me</span></h2>
      <br/><br/><br/>
      <AnimateSharedLayout>
        <Toggle title ="Other Hobbies">
            <div className="answer">
              <p>I am an artist and I mainly draw portraits and graffiti. I've also done some graphic design work.</p>
              <p>I'm a big gamer primarily playing FPS games so I can satisfy my competitve side.</p>
            </div>  
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title ="My Education">
            <div className="answer">
              <p>General Assembly - Software Engineering Immersive (Remote) Graduate </p>
              <p>Colorado Technical University - Bachelors Computer Science - Software Engineering exp. Graduation 04/2023 </p>
            </div>  
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Current Projects & Pursuits">      
            <div className="answer">
              <p>Currently I am expanding my scope by learning new technologies and libraries including Matierail UI and Tailwind as well as Redux.</p>
              <p>Revisiting my older projects to better implement responsive design and include things such as page transitions and animations as I learn them.</p>
            </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Work With Me">     
            <div className="answer">
              <p>If you have any ideas for a project that you'd like to collaborate on, contact me. I enjoy working and learning along side others.</p>
              <p>I am open to freelance work as well.</p>
            </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  )
}

const StyledFaq = styled(StyledAbout)`
  padding: 5vh 5% 5vh 5%;
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .divider {
    background: #60A97B;
    height: 0.2rem; 
    margin: 2rem 0;
    width: 100%;
  }
  .toggle {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
  @media (max-width: 1100px) {
    padding: 0 5% 5vh 5%;
  }
  h2 {
    padding: 0;
  }
`

export default FaqSection