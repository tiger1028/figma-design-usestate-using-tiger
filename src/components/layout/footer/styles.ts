import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  width: 400px;
  height: 100%;
  position: fixed;
  right: 0px;
  bottom: 0px;
  flex-direction: column;
  justify-content: space-between;
`

export const MenuItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 40px;
  margin-right: 40px;
`

export const MenuBotton = styled.img`
  width: 50px;
  height: 50px;
`

export const ButtonBox = styled.div`
  bottom: 0px;
  display: grid;
  grid-template-columns: auto auto;
  width: 400px;
  height: 600px;
`

export const ButtonItem = styled.button`
  border: none;
  cursor: pointer;
  &:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.15);
  }
  &:nth-child(3) {
    background-color: rgba(0, 0, 0, 0.15);
  }
  &:nth-child(4) {
    background-color: rgba(0, 0, 0, 0.15);

  }
  &:nth-child(5) {
    background-color: rgba(255, 255, 255, 0.15);
  }
  &:hover {
    border: 1px solid black;
  }
`

export const ButtonItem1 = styled.button`
  border: none;
  grid-column: 2 / 3;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    border: 1px solid black;
  }
`

export const ButtonText = styled.p`
  font-size: 40px;
  color: white;
  font-weight: 400;
`