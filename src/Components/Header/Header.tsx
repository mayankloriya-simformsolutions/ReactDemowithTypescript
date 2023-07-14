import { HeaderRight, HeaderStyle, HeaderInnerStyle,MenuStyle } from "./Header.styles";
import { Link } from "react-router-dom";
import CustomSelect  from "../../Common/Component/CustomSelect/CustomSelect";
import Container from "../Container/Container";

const items = [
    {
      label: <Link to="/">Home</Link>,
      key: "mail",
    },
    {
      label: <Link to="/about">About</Link>,
      key: "app",
    },
  ];

export default function Header(props: any) {
  return (
    <HeaderStyle>
    <Container>
      <HeaderInnerStyle>
      <MenuStyle mode="horizontal" items={items} />
      <HeaderRight>
        <CustomSelect
          defaultValue={props.themevalue}
          value={props.themevalue}
          style={{ width: 120 }}
          onChange={props.themeChange}
          options={[
            {
              value: "lightmode",
              label: "Light Theme",
            },
            {
              value: "darkmode",
              label: "Dark Theme",
            },
          ]}
        />
      </HeaderRight>
      </HeaderInnerStyle>  
    </Container>
  </HeaderStyle>
  )
}
