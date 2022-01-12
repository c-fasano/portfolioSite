import React from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle";
import AboutMe from "./Pages/AboutMe";
import Nav from "./components/Nav";
import ContactMe from "./Pages/ContactMe";
import MyWork from "./Pages/MyWork";

import { AnimatePresence } from "framer-motion";

const App = () => {

  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence 
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0)
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/work" element={<MyWork />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App;
