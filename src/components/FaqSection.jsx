import React from "react";

import styled from "styled-components";
import { AboutSection, StyledAbout } from "../styles"

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>More About <span>Me</span></h2>
      <br/><br/><br/>
      <div className="question">
        <h4>Education</h4>
        <div className="answer">
          <p>Bootcamp Graduate</p>
          <p>Currently pursuing B.S in CS -Softwarre Engineering</p>
        </div>
        <div className="divider"></div>
      </div>
      <div className="question">
        <h4>Current Projects</h4>
        <div className="answer">
          <p>Bootcamp Graduate</p>
          <p>Currently pursuing B.S in CS -Softwarre Engineering</p>
        </div>
        <div className="divider"></div>
      </div>
      <div className="question">
        <h4>Want to Work With Me</h4>
        <div className="answer">
          <p>Bootcamp Graduate</p>
          <p>Currently pursuing B.S in CS -Softwarre Engineering</p>
        </div>
        <div className="divider"></div>
      </div>
    </StyledFaq>
  )
}

const StyledFaq = styled(StyledAbout)`
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
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`

export default FaqSection