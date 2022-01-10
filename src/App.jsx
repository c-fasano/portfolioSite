import React from "react";
import { Route, Routes } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle";
import AboutMe from "./Pages/AboutMe";
import Nav from "./components/Nav";
import ContactMe from "./Pages/ContactMe";
import MyWork from "./Pages/MyWork";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/work" element={<MyWork />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
    </div>
  )
}

export default App;
