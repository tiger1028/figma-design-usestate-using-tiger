import styled from "styled-components";

export const RightBar = styled.div`
  display: flex;
  width: 400px;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 40px;
  margin-right: 40px;
`;

export const MenuBotton = styled.img`
  width: 40px;
  height: 40px;
`;

export const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  height: 600px;
`;

export const ButtonItem = styled.button`
  border: none;
  cursor: pointer;
  height: 200px;
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
`;

export const ButtonItemFirst = styled.button`
  border: none;
  height: 200px;
  cursor: pointer;
  grid-column: 2 / 3;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    border: 1px solid black;
  }
`;

export const ButtonText = styled.p`
  font-size: 35px;
  color: white;
  font-weight: 400;
`;
