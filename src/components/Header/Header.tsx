import React, { useMemo, useState } from 'react';
import { Menu } from 'antd';
import { StyledLink, StyledMenu, StyledItem, StyledSubMenu, HeaderWrapper, StyledMenuIcon, StyledDrawer } from './styles';
import { IProject } from "../../pages/index";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { useTranslation } from 'react-i18next';
const { Item } = Menu;

export interface MenuLink {
  name: string;
  type: "link" | "anchor" | "drop";
  identifier?: string;
  path?: string;
  items?: MenuLink[],
}

export interface HeaderProps{
  menuLinks: MenuLink[];
  parallaxRef: any;
  projects: IProject[];
  offsets: any;
}

const Header = ({menuLinks, parallaxRef, projects, offsets}: HeaderProps) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const isSM = typeof window !== `undefined` && window.matchMedia('(max-height: 667px)').matches;
  const { t } = useTranslation();
  const getScrollOffset = (i: number) => {
    if(Number.isInteger(projects[i].offset)){  
      if(isSM)
        return Number.isInteger(projects[i].smOffset) ? projects[i].smOffset : projects[i].smOffset - 0.1;
      else
        return projects[i].offset;
    }
    else{ 
      if(isSM)
        return projects[i].smOffset - 0.2;
      else
        return projects[i].offset - 0.3;
    }
  };

  const handleItemClick = (i: number, isDrawer: boolean) => {
    if(isDrawer)
      setShowDrawer(false);
    parallaxRef?.current.scrollTo(getScrollOffset(i));
  };

  const handleLinkClick = (e: React.MouseEvent, menuLink: MenuLink, isDrawer: boolean) => {
    e.preventDefault();
    if(isDrawer)
      setShowDrawer(false);
  }

  const handleAnchorClick = (menuLink: MenuLink, isDrawer: boolean) => {
    if(isDrawer)
      setShowDrawer(false);
    parallaxRef?.current.scrollTo(isSM ? offsets[menuLink.path].sm : offsets[menuLink.path].md - 0.1);
  }

  const handleMenuClick = () => {
    setShowDrawer(true);
  }

  const onClose = () => {
    setShowDrawer(false);
  }

  return (
    <HeaderWrapper>
      <StyledMenuIcon onClick={handleMenuClick} />
      <StyledMenu mode="horizontal" selectedKeys={[]}>
        <LangSwitcher theme='light' />
        {menuLinks.map((menuLink: MenuLink) => (
          menuLink.type === 'anchor' ?
            <StyledItem key={menuLink.path} onClick={() => handleAnchorClick(menuLink, false)} >
              {t(menuLink.identifier)}
            </StyledItem>
          : menuLink.type === "link" ?
            <StyledItem>
              <StyledLink onClick={(e) => handleLinkClick(e, menuLink, false)} to={menuLink.path}>
                {t(menuLink.identifier)}
              </StyledLink>
            </StyledItem>
          : 
          <StyledSubMenu key={menuLink.name} title={t(menuLink.identifier)}>
            {menuLink.items.map((obj, i) => (
              <Item key={obj.name} onClick={() => handleItemClick(i, false)}>{obj.name}</Item>
            ))}
          </StyledSubMenu>
        ))}
      </StyledMenu>
      <StyledDrawer onClose={onClose} visible={showDrawer} placement='left' title='Menu' keyboard>
        <LangSwitcher theme='dark'/>
        <StyledMenu mode='inline' selectedKeys={[]}>
        {menuLinks.map((menuLink: MenuLink) => (
          menuLink.type === 'anchor' ?
            <StyledItem key={menuLink.path} onClick={() => handleAnchorClick(menuLink, true)} >
              {t(menuLink.identifier)}
            </StyledItem>
          : menuLink.type === "link" ?
            <StyledItem>
              <StyledLink onClick={(e) => handleLinkClick(e, menuLink, true)} to={menuLink.path}>
                {t(menuLink.identifier)}
              </StyledLink>
            </StyledItem>
          : 
          <StyledSubMenu key={menuLink.name} title={t(menuLink.identifier)}>
            {menuLink.items.map((obj, i) => (
              <Menu.Item key={obj.name} onClick={() => handleItemClick(i, true)}>{obj.name}</Menu.Item>
            ))}
          </StyledSubMenu>
        ))}
      </StyledMenu>
      </StyledDrawer>
    </HeaderWrapper>
  );
}

export default Header;