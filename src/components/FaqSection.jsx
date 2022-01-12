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
        <Toggle title ="My Education">
            <div className="answer">
              <p>Bootcamp Graduate</p>
              <p>Currently pursuing B.S in CS -Softwarre Engineering</p>
            </div>  
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Current Projects">      
            <div className="answer">
              <p>Bootcamp Graduate</p>
              <p>Currently pursuing B.S in CS -Softwarre Engineering</p>
            </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Collaborate With Me">     
            <div className="answer">
              <p>Bootcamp Graduate</p>
              <p>Currently pursuing B.S in CS -Softwarre Engineering</p>
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
    background: #cccccc;
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