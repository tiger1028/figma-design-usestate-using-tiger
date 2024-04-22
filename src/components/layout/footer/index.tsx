import { ButtonBox, ButtonItem, ButtonText, Footer, MenuBotton, MenuItemBox, ButtonItem1} from "./styles"
import Menu from '/svgs/menu.svg';
import { INITIAL_INFORMATION } from "../../../consts/information";

interface FooterComponentProps {
  chooseInformation: (index: number, subtitle: string) => void;
}

export const FooterComponent: React.FC<FooterComponentProps> = ({ chooseInformation }) => {
  
  const selectIndex = (index: number) => {
    const subtitle = INITIAL_INFORMATION[index].subtitle;
    chooseInformation(index, subtitle);
  }

  return (
    <>
      <Footer>
        <MenuItemBox>
          <MenuBotton src = {Menu}></MenuBotton>
        </MenuItemBox>
        <ButtonBox>
          {INITIAL_INFORMATION.map((information, index) => (
            index == 0 ? (
              <ButtonItem1 key={index} onClick={() => selectIndex(index)}>
                 <ButtonText>{ information.subtitle }</ButtonText>
              </ButtonItem1>
            ) : (
              <ButtonItem key={index} onClick={() => selectIndex(index)}>
                 <ButtonText>{ information.subtitle }</ButtonText>
                </ButtonItem>
              )
          ))}
          </ButtonBox>
      </Footer>
    </>
  )
}