import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { StyledLink, StyledMenu, StyledItem, StyledSubMenu, HeaderWrapper, StyledMenuIcon } from './styles';
import { IProject } from "../../pages/index";

const { Item } = Menu;
export interface MenuLink {
  name: string;
  type: "link" | "anchor" | "drop";
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
  const isSM = typeof window !== `undefined` && window.matchMedia('(max-height: 667px)').matches;

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

  const handleItemClick = (i: number) => {
    parallaxRef?.current.scrollTo(getScrollOffset(i));
  };

  const handleAnchorClick = (menuLink: MenuLink) => {
    parallaxRef?.current.scrollTo(isSM ? offsets[menuLink.path].sm : offsets[menuLink.path].md - 0.1);
  }

  return (
    <HeaderWrapper>
      <StyledMenuIcon />
      <StyledMenu mode="horizontal" selectedKeys={[]}>
        {menuLinks.map((menuLink: MenuLink) => (
          menuLink.type === 'anchor' ?
            <StyledItem key={menuLink.path} onClick={() => handleAnchorClick(menuLink)} >
              {menuLink.name}
            </StyledItem>
          : menuLink.type === "link" ?
            <StyledItem>
              <StyledLink to={menuLink.path}>
                {menuLink.name}
              </StyledLink>
            </StyledItem>
          : 
          <StyledSubMenu key={menuLink.name} title={menuLink.name}>
            {menuLink.items.map((obj, i) => (
              <Item key={obj.name} onClick={() => handleItemClick(i)}>{obj.name}</Item>
            ))}
          </StyledSubMenu>
        ))}
      </StyledMenu>
    </HeaderWrapper>
  );
}

export default Header;