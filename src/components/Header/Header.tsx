import React, { useMemo, useState } from 'react';
import { StyledLink, StyledMenu, StyledItem, StyledSubMenu, HeaderWrapper, StyledMenuIcon, StyledDrawer } from './styles';
import { IProject } from "../../pages/index";
import { useTranslation } from 'react-i18next';
import useMedia from '../../hooks/useMedia';
import Drawer from "./Drawer";
import Menu from "./Menu";

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
  const { height, width } = useMedia();
  const isSM = height <= 667 || width <= 960;
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
      <Menu
        menuLinks={menuLinks}
        handleAnchorClick={handleAnchorClick}
        handleItemClick={handleItemClick}
        handleLinkClick={handleLinkClick}
      />
      <Drawer 
        open={showDrawer} 
        menuLinks={menuLinks}
        onClose={onClose}
        handleAnchorClick={handleAnchorClick}
        handleItemClick={handleItemClick}
        handleLinkClick={handleLinkClick}
      />
    </HeaderWrapper>
  );
}

export default React.memo(Header);