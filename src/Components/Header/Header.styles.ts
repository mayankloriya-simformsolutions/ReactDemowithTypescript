import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const HeaderStyle = styled(Header)`  
  &.ant-layout-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    padding: 15px 40px;
    background-color: ${(props) => props.theme.WhiteBgColor};
    display: flex;
    align-items:center;
  }
`;

export const MenuStyle = styled(Menu)`
  border: 0px;
  line-height: 30px;
  margin-left: 20px;
`;

export const HeaderRight = styled.div`
  margin-left: auto;
`;
export const HeaderInnerStyle = styled.div`
     display: flex;
    align-items:center; 
`;