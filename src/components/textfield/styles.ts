import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  width: 40%;
`;

export const Title = styled.span`
  font-size: 95px;
  font-weight: 500;
  line-height: 90px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 70px;
`;

export const SubTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 20px;
`;

export const SubTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const SubText = styled.span`
  font-size: 25px;
`;
