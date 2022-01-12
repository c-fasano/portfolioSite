import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.jpeg"

const Nav = () => {
  return (
    <StyledNav>
      <NavLink id="logo" to="/"><img src={Logo} alt="Lotus flower graphic" style={{height: "7vh"}}></img></NavLink>
      <NavLink to="/">About Me</NavLink>
      <NavLink to="/work">My Work</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 10;
  min-height: 10vh;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 5%;
  background: #000000;
  a {
    color: #60A97B;
    text-decoration: none;
    font-family: 'Cinzel', serif;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    /* font-family: "insertGoogleFontHere", sane-serif; */
  }
  li{
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1100px) {
    ul {
      padding: 2vh 2%;
      justify-content: space-evenly;
    }
  }
`

export default Nav