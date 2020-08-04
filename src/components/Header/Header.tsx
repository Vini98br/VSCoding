import React, { useMemo } from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Button , Menu, MenuItem, Fade } from "@material-ui/core";
import { StyledListItem, StyledUL, StyledLink } from './styles';
import { IProject } from "../../pages/index";
export interface MenuLink {
  name: string;
  type: "link" | "anchor" | "drop";
  path?: string;
  items?: any[],
}

export interface HeaderProps{
  menuLinks: MenuLink[];
  parallaxRef: any;
  projects: IProject[];
  offsets: any;
}

const Header = ({menuLinks, parallaxRef, projects, offsets}: HeaderProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isSM = window && window.matchMedia('(max-height: 667px)').matches;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

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
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <StyledUL>
        {menuLinks.map((menuLink: MenuLink) => (
          <StyledListItem>
          {menuLink.type === 'anchor' ?
            <button >{menuLink.name}</button>
          : menuLink.type === "link" ?
            <StyledLink to={menuLink.path}>{menuLink.name}</StyledLink>
          :
            <>
             <Button aria-controls="fade-menu" aria-haspopup="true" onMouseEnter={handleClick}>
                {menuLink.name}
              </Button>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                onMouseOut={handleClose}
                open={open}
                TransitionComponent={Fade}
              >
                {menuLink?.items?.map((subLink: MenuLink, i: number) => (
                  <MenuItem onClick={() => handleItemClick(i)}>{subLink.name}</MenuItem>
                ))}
              </Menu>
            </>
          }
          </StyledListItem>
        ))}
      </StyledUL>
    </nav>
  );
}

export default Header;