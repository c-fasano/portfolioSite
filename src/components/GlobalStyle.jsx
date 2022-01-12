import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1b1b1b;
  overflow-x: hidden;
  /* font-family: "insertGoogleFontHere", sans-serif */
}


button {
  font-weight: bold;
  font-size: 1.5vw;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid blue;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  /* font-family: "insertGoogleFontHere", sans-serif */

  &:hover {
    background-color: blue;
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
  color: white;
  font-size: 2vw;
  font-family: 'Cinzel', serif;
}

a {
  font-size: 2.5vw;
}

span {
  font-weight: bold;
  color: blue;
}

p {
  padding: 3rem 0;
  color: #ccc;
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