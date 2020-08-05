import styled from 'styled-components';
import { Link } from "gatsby";
// import {Button} from "@material-ui/core";
import { Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const StyledMenuIcon = styled(MenuOutlined)`
  font-size: 32px;
  color: ${props => props.theme.colors.foreground};
  margin: 20px 0 0 20px;
`;

export const StyledMenu = styled(Menu)`
  && {
    border-bottom: unset;
    background-color: unset;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const HeaderWrapper = styled.div`
  @media (min-width: 1081px){
    ${StyledMenu} {
      visibility: visible;
    }
    ${StyledMenuIcon} {
      visibility: hidden;
    }
  }
  @media (max-width: 1080px){
    ${StyledMenu} {
      visibility: hidden;
    }
    ${StyledMenuIcon} {
      visibility: visible;
    }
  }
`;


export const StyledItem = styled(Menu.Item)`
  && {
    color: ${props => props.theme.colors.foreground};
    font-size: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-weight: 300;
    :hover{
      color:${prosp => prosp.theme.colors.pink};
      border-bottom: 2px solid ${prosp => prosp.theme.colors.pink};
    }
  }
  && a {
    color: ${props => props.theme.colors.foreground};
    font-size: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-weight: 300;
    :hover{
      color: ${prosp => prosp.theme.colors.pink};
    }
  }
`;

export const StyledSubMenu = styled(Menu.SubMenu)`
  && {
    color: ${props => props.theme.colors.foreground};
    font-size: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-weight: 300;
    &:hover{
      & { 
        border-bottom: 2px solid ${prosp => prosp.theme.colors.pink};
      }
      & .ant-menu-submenu-title{
        color: ${prosp => prosp.theme.colors.pink};
      }
    }
  }
`;


export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily};
  font-weight: bolder;
  color: ${props => props.theme.colors.foreground};
  height: 50px;
  width: auto;
  display: block;
  text-align: center;
  line-height: 50px;
`;