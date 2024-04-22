import { useState } from "react"
import { FooterComponent } from "../../components/layout/footer"
import { HeaderComponent } from "../../components/layout/header"
import { TextFieldComponent } from "../../components/textfield"
import { Container} from "./styles"
import { INITIAL_INFORMATION, InformationType } from "../../consts/information"

export const DashboardPage: React.FC = () => {

  const [information, setInformation] = useState<InformationType>(INITIAL_INFORMATION[0]);
  const [subtitle, setSubtitle] = useState<string>("Forest Stay");

  const chooseInformation = (index: number, subtitle: string) => {
    setInformation(INITIAL_INFORMATION[index]);
    setSubtitle(subtitle);
  }

  return (
    <Container state = {subtitle}>
      <HeaderComponent />
      <TextFieldComponent information = {information} />
      <FooterComponent chooseInformation = {chooseInformation}  />
    </Container>
  )
}

