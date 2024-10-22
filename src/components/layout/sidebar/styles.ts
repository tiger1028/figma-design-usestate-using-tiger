import styled from "styled-components";

export const SideBar = styled.aside`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 40px 10px;
`;

export const NavbarList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const AccountItem = styled.img`
  width: 30px;
  height: 30px;
`;

export const SearchItem = styled.img`
  width: 35px;
  height: 35px;
`;

export const Title = styled.span`
  writing-mode: vertical-lr;
  font-size: 30px;
  transform: rotate(-180deg);
`;

export const LinkbarList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const LinkbarItem = styled.img`
  width: 20px;
  height: 20px;
`;
