import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledAbout = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5vh 0 5vh 5%;
color: #FAFAFF;
@media (max-width: 1100px) {
  display: block;
  padding: 2vh 2%;
  text-align: center;
}
`
export const StyledDescription = styled(motion.div) `
z-index: 2;
flex: 1;
padding-right: 5%;
h2 {
  font-weight: lighter;
}
@media (max-width: 1100px) {
  padding: 0;
  button {
    margin-bottom: 3vh;
  }
}
`
export const StyledImage = styled.div `
z-index: 2;
flex: 1;
overflow: hidden;
img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
`
export const Hide = styled.div `
overflow: hidden;
`
export const Logo = styled.img`
width: 5vw;
margin: 0 0.5rem;
`
