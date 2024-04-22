import styled from "styled-components";

export const Container = styled.div<{state: string}>`
  position: fixed;
  width: 100%;
  height: 100%; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  color: white;
  background-image: ${({ state }) => `url("images/${state}.png")`};
`
