import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1b1b1b;
}


button {
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid blue;
  background: transparent;
  color: white;
  transition: all 0.5s ease;

  &:hover {
    background-color: blue;
    color: white;
  }
}

h2 {
  font-weight: lighter;
  font-size: 4rem;
}

h3 {
  color: white;
}

h4 {
  font-weight: bold;
  color: white;
}

a {
  font-size: 1.1rem;
}

span {
  font-weight: bold;
  color: blue;
}

p {
  padding: 3rem 0;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
}

`

export default GlobalStyle