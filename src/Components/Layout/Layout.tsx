import Header from "../Header/Header";
import { PageBodyWrapper, PageWrapper } from "./Layout.styles";
import { Outlet } from "react-router-dom";

export default function Layout(props: any) {
  return (
    <PageWrapper>
      <Header themeChange={props.themeChange} themevalue={props.themevalue} />
      <PageBodyWrapper>
        <Outlet />
      </PageBodyWrapper>
    </PageWrapper>
  );
}
