import styled from 'styled-components';
import { Link } from "gatsby";
import { Button, Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export const StyledMenuIcon = styled(MenuOutlined)`
  font-size: 32px;
  color: ${props => props.theme.colors.foreground};
  margin: 20px 0 0 20px;
  cursor: pointer;
  transition: color 0.2s;
  :hover{
    color: ${props => props.theme.colors.pink};
  }
`;


export const StyledItem = styled(Menu.Item)`
  && {
    color: ${props => props.theme.colors.foreground};
    font-size: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-weight: 300;
    :hover{
      color:${props => props.theme.colors.pink};
      border-bottom: 2px solid ${props => props.theme.colors.pink};
    }
  }
  && a {
    color: ${props => props.theme.colors.foreground};
    font-size: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-weight: 300;
    :hover{
      color: ${props => props.theme.colors.pink};
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
        border-bottom: 2px solid ${props => props.theme.colors.pink};
      }
      & .ant-menu-submenu-title{
        color: ${props => props.theme.colors.pink};
      }
      & .ant-menu-submenu-arrow::after{
        background: ${props => `linear-gradient(to right, ${props.theme.colors.pink}, ${props.theme.colors.pink})`};
      }
      & .ant-menu-submenu-arrow::before{
        background: ${props => `linear-gradient(to right, ${props.theme.colors.pink}, ${props.theme.colors.pink})`};
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

export const StyledDrawer = styled(Drawer)`
  & .ant-drawer-wrapper-body{
    background-color: ${props => props.theme.colors.background};
  }
  & .ant-drawer-header{
    background-color: ${props => props.theme.colors.background};
  }
  & .ant-drawer-title{
    color: ${props => props.theme.colors.foreground};
  }
  & .ant-drawer-close{
    color: ${props => props.theme.colors.foreground};
  }

`;

export const StyledMenu = styled(Menu)`
  && {
    border-bottom: unset;
    background-color: unset;
    display: ${props => props.mode === 'horizontal' ? 'flex' : 'unset'};
    justify-content: ${props => props.mode === 'horizontal' ? 'flex-end' : 'unset'};
    align-items: baseline;
    padding-left: 20px;
    div{
      margin-right: ${props => props.mode === 'horizontal' ? 'auto' : 'unset'};
    }
  }
  ${StyledItem}{
    :hover{
      border-bottom: ${props => props.mode === 'inline' && 'none'};
    }
  }
  ${StyledLink}{
    text-align: ${props => props.mode === 'inline' && 'start'}; 
  }
  ${StyledSubMenu}{
    & .ant-menu-submenu-arrow::after{
      background-color: white;
      background-image:linear-gradient(to right, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65));
    }
    & .ant-menu-submenu-arrow::before{
      background-color: white;
      background-image:linear-gradient(to right, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65));
    }
    & .ant-menu-inline{
      background-color:  ${props => props.mode === 'inline' && props.theme.colors.currentLine};
      li{
        :last-child{
          border-bottom: unset;
        }
        color: ${props => props.mode === 'inline' ? props.theme.colors.foreground : props.theme.colors.background};
        :hover{
          color: ${props => props.theme.colors.pink};
        }
      }
    }
    :hover{
      border-bottom: ${props => props.mode === 'inline' && 'none'};
    }
    & .ant-menu-submenu-title :active{
      color: ${props => props.theme.colors.pink};
    }
  }
`;

export const HeaderWrapper = styled.div`
  @media (min-width: 1081px){
    ${StyledMenu} {
      visibility: visible;
    }
    ${StyledMenuIcon} {
      visibility: hidden;
      display: none;
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
