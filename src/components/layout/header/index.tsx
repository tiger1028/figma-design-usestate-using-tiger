import * as Header from './styles';
import Account  from '/svgs/account.svg';
import Search from '/svgs/search.svg';
import Facebook from '/svgs/facebook.svg'
import Instagram from '/svgs/instagram.svg';
import Linkedin from '/svgs/linkedin.svg';

export const HeaderComponent: React.FC = () => {
  
  return (
    <Header.Header>
      <Header.NavbarList>
        <Header.AccountItem src = {Account}></Header.AccountItem>
        <Header.SearchItem src = {Search}></Header.SearchItem>
      </Header.NavbarList>
      <Header.Title>Travelor</Header.Title>
      <Header.LinkbarList>
        <Header.LinkbarItem src = {Facebook}></Header.LinkbarItem>
        <Header.LinkbarItem src = {Instagram}></Header.LinkbarItem>
        <Header.LinkbarItem src = {Linkedin}></Header.LinkbarItem>
      </Header.LinkbarList>
    </Header.Header>    
  )
}