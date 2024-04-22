import { useState } from "react"
import { RightBarComponent } from "../../components/layout"
import { SideBarComponent } from "../../components/layout"
import { TextFieldComponent } from "../../components/textfield"
import { Container} from "./styles"
import { INITIAL_INFORMATION, InformationType } from "../../consts"

export const DashboardPage: React.FC = () => {
  const [information, setInformation] = useState<InformationType>(INITIAL_INFORMATION[0]);
  const [url, setUrl] = useState<string>(INITIAL_INFORMATION[0].url);

  const chooseInformation = (index: number, url: string) => {
    setInformation(INITIAL_INFORMATION[index]);
    setUrl(url);
  }
  return (
    <Container url = {url}>
      <SideBarComponent />
      <TextFieldComponent information = {information} />
      <RightBarComponent chooseInformation = {chooseInformation}  />
    </Container>
  )
}

