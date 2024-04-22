import * as RightBar from "./styles";
import Menu from '/svgs/menu.svg';
import { INITIAL_INFORMATION, InformationType } from "../../../consts";

interface RightBarComponentProps {
  chooseInformation: (index: number, url: string) => void;
}

export const RightBarComponent: React.FC<RightBarComponentProps> = ({ chooseInformation }) => {
  const selectIndex = (index: number) => {
    const url = INITIAL_INFORMATION[index].url;
    chooseInformation(index, url);
  }
  return (
      <RightBar.RightBar>
        <RightBar.MenuItemBox>
          <RightBar.MenuBotton src = {Menu}></RightBar.MenuBotton>
        </RightBar.MenuItemBox>
        <RightBar.ButtonBox>
          {INITIAL_INFORMATION.map((information: InformationType, index: number) => (
            index == 0 ? (
              <RightBar.ButtonItemFirst key = {index} onClick={() => selectIndex(index)}>
                 <RightBar.ButtonText>{ information.subtitle }</RightBar.ButtonText>
              </RightBar.ButtonItemFirst>
            ) : (
              <RightBar.ButtonItem key = {index} onClick={() => selectIndex(index)}>
                 <RightBar.ButtonText>{ information.subtitle }</RightBar.ButtonText>
                </RightBar.ButtonItem>
              )
          ))}
          </RightBar.ButtonBox>
      </RightBar.RightBar>
  )
}