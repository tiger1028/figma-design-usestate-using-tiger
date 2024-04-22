import { MainContent, Title, Icon, SubTextContainer, SubText, SubTitle} from "./styles"
import arrow from '/svgs/arrow.svg';
import { InformationType } from "../../consts/information";

interface TextFieldComponentProps {
  information: InformationType;
}

export const TextFieldComponent: React.FC<TextFieldComponentProps> = ({information}) => {
  return (
      <MainContent>
        <Title>{information.title}</Title>  
        <Icon src = {arrow}></Icon>
        <SubTextContainer>
          <SubTitle>{information.subtitle}</SubTitle>
          <SubText>{information.descrition1}</SubText>
          <SubText>{information.descrition2}</SubText>
        </SubTextContainer>
      </MainContent>
  )
}

