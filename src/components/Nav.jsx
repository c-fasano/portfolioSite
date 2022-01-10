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
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
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
`

export default Nav