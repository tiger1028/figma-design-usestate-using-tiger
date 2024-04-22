import { useState } from "react"
import { RightBarComponent } from "../../components/layout"
import { SideBarComponent } from "../../components/layout"
import { TextFieldComponent } from "../../components/textfield"
import { Container} from "./styles"
import { INITIAL_INFORMATION, InformationType } from "../../consts"

export const DashboardPage: React.FC = () => {
  const [information, setInformation] = useState<InformationType>(INITIAL_INFORMATION[0]);
  const [subtitle, setSubtitle] = useState<string>("Forest Stay");

  const chooseInformation = (index: number, subtitle: string) => {
    setInformation(INITIAL_INFORMATION[index]);
    setSubtitle(subtitle);
  }
  return (
    <Container state = {subtitle}>
      <SideBarComponent />
      <TextFieldComponent information = {information} />
      <RightBarComponent chooseInformation = {chooseInformation}  />
    </Container>
  )
}

