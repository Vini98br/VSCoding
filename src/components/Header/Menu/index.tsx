import React from 'react';

import { StyledMenu, StyledSubMenu, StyledItem, StyledLink,  } from '../styles';
import LangSwitcher from '../../LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { MenuLink } from '../Header';
// import MenuItem from 'antd/lib/menu/MenuItem';
import { Menu } from "antd";

export interface MenuProps {
  menuLinks: MenuLink[];
  handleAnchorClick: (menuLink: MenuLink, isDrawer: boolean) => void;
  handleLinkClick: (e: React.MouseEvent, menuLink: MenuLink, isDrawer: boolean) => void;
  handleItemClick: (i: number, isDrawer: boolean) => void;
}

const CustomMenu: React.FC<MenuProps> = ({menuLinks, handleAnchorClick, handleItemClick, handleLinkClick}) => {
  const { t } = useTranslation();
  return (
    <StyledMenu mode="horizontal" selectedKeys={[]}>
      <LangSwitcher theme='light' />
      {menuLinks.map((menuLink: MenuLink) => (
        menuLink.type === 'anchor' ?
          <StyledItem key={menuLink.path} onClick={() => handleAnchorClick(menuLink, false)} >
            <StyledLink to={'/'}>
              {t(menuLink.identifier)}
            </StyledLink>
          </StyledItem>
        : menuLink.type === "link" ?
          <StyledItem key={menuLink.path} onClick={(e) => handleLinkClick(e.domEvent, menuLink, false)}>
            <StyledLink to={menuLink.path}>
              {t(menuLink.identifier)}
            </StyledLink>
          </StyledItem>
        : 
          <StyledSubMenu key={menuLink.name} title={t(menuLink.identifier)}>
            {menuLink.items.map((obj, i) => (
              <Menu.Item key={obj.name} onClick={() => handleItemClick(i, false)}>{obj.name}</Menu.Item>
            ))}
          </StyledSubMenu>
      ))}
    </StyledMenu>
  );
}

export default CustomMenu;