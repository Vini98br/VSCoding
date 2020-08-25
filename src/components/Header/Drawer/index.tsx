import React from 'react';

import { StyledDrawer, StyledMenu, StyledItem, StyledLink, StyledSubMenu, } from '../styles';
import { MenuLink } from '../Header';
import LangSwitcher from '../../LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

export interface DrawerProps {
  open: boolean;
  menuLinks: MenuLink[];
  onClose: () => void;
  handleAnchorClick: (menuLink: MenuLink, isDrawer: boolean) => void;
  handleLinkClick: (e: React.MouseEvent, menuLink: MenuLink, isDrawer: boolean) => void;
  handleItemClick: (i: number, isDrawer: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({open, menuLinks, onClose, handleAnchorClick, handleItemClick, handleLinkClick}) => {
  const { t } = useTranslation();
  return (
    <StyledDrawer onClose={onClose} visible={open} placement='left' title='Menu' keyboard>
      <LangSwitcher theme='dark'/>
      <StyledMenu mode='inline' selectedKeys={[]}>
        {menuLinks.map((menuLink: MenuLink) => (
          menuLink.type === 'anchor' ?
            <StyledItem key={menuLink.path} onClick={() => handleAnchorClick(menuLink, true)} >
              {t(menuLink.identifier)}
            </StyledItem>
          : menuLink.type === "link" ?
            <StyledItem onClick={(e) => handleLinkClick(e.domEvent, menuLink, true)}>
              <StyledLink to={menuLink.path}>
                {t(menuLink.identifier)}
              </StyledLink>
            </StyledItem>
          : 
          <StyledSubMenu key={menuLink.name} title={t(menuLink.identifier)}>
            {menuLink.items.map((obj, i) => (
              <StyledItem key={obj.name} onClick={() => handleItemClick(i, true)}>{obj.name}</StyledItem>
            ))}
          </StyledSubMenu>
        ))}
      </StyledMenu>
    </StyledDrawer>
  );
}

export default Drawer;