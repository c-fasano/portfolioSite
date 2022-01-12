import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #30343F;
  overflow-x: hidden;
  /* font-family: "insertGoogleFontHere", sans-serif */
}


button {
  font-weight: bold;
  font-size: 1.5vw;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #5167B8 ;
  background: transparent;
  color: #FAFAFF;
  transition: all 0.5s ease;
  font-family: 'Roboto', sans-serif;
  /* font-family: "insertGoogleFontHere", sans-serif */

  &:hover {
    background-color: #5167B8;
    color: white;
  }
}

h2 {
  font-weight: lighter;
  font-size: 3.5vw;
  font-family: 'Cinzel', serif;
}

h3 {
  color: white;
}

h4 {
  font-weight: bold;
  color: #5167B8;
  font-size: 2vw;
  font-family: 'Cinzel', serif;
}

a {
  font-size: 2.5vw;
}

span {
  font-weight: 1000;
  color: #5167B8;
}

p {
  padding: 3rem 0;
  color: #FAFAFF;
  font-size: 1.5vw;
  line-height: 150%;
  font-family: 'Roboto', sans-serif;
}

@media (max-width: 1100px) {
  h2 {
    font-size: 5vw;
  }
  p{
    font-size: 3vw;
    padding: 1.5rem 0;
  }
  button {
    font-size: 3vw;
    padding: 2vh 2%;
  }
  h4 {
    font-size: 4vw;
  }
}
`

export default GlobalStyle