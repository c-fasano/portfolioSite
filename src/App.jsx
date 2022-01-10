import React from "react";
import { Route, Routes } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <AboutUs />
    </main>
  )
}

export default App;
