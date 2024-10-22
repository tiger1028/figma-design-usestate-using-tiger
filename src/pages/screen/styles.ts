import styled from "styled-components";

export const Container = styled.div<{ url: string }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ url }) => `url("${url}")`};
`;
