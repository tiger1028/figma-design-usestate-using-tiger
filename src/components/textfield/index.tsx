import * as TextField from "./styles";
import arrow from '/svgs/arrow.svg';
import { InformationType } from "../../consts";

interface TextFieldComponentProps {
  information: InformationType;
}

export const TextFieldComponent: React.FC<TextFieldComponentProps> = ({information}) => {
  return (
      <TextField.MainContent>
        <TextField.Title>{information.title}</TextField.Title>  
        <TextField.Icon src = {arrow}></TextField.Icon>
        <TextField.SubTextContainer>
          <TextField.SubTitle>{information.subtitle}</TextField.SubTitle>
          <TextField.SubText>{information.descrition1}</TextField.SubText>
          <TextField.SubText>{information.descrition2}</TextField.SubText>
        </TextField.SubTextContainer>
      </TextField.MainContent>
  )
}

