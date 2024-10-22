import * as SideBar from "./styles";
import Account from "/svgs/account.svg";
import Search from "/svgs/search.svg";
import Facebook from "/svgs/facebook.svg";
import Instagram from "/svgs/instagram.svg";
import Linkedin from "/svgs/linkedin.svg";

export const SideBarComponent: React.FC = () => {
  return (
    <SideBar.SideBar>
      <SideBar.NavbarList>
        <SideBar.AccountItem src={Account}></SideBar.AccountItem>
        <SideBar.SearchItem src={Search}></SideBar.SearchItem>
      </SideBar.NavbarList>
      <SideBar.Title>Travelor</SideBar.Title>
      <SideBar.LinkbarList>
        <SideBar.LinkbarItem src={Facebook}></SideBar.LinkbarItem>
        <SideBar.LinkbarItem src={Instagram}></SideBar.LinkbarItem>
        <SideBar.LinkbarItem src={Linkedin}></SideBar.LinkbarItem>
      </SideBar.LinkbarList>
    </SideBar.SideBar>
  );
};
