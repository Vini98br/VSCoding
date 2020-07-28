import React from 'react';

import { StyledListItem, StyledUL, StyledLink } from './styles';

export interface MenuLink {
  name: string;
  link: string;
}

export interface HeaderProps{
  menuLinks: MenuLink[]
}

const Header = ({menuLinks}: HeaderProps) => {
  return (
    <nav>
      <StyledUL>
        {menuLinks.map((menuLink: MenuLink) => (
          <StyledListItem>
            <StyledLink to={menuLink.link}>{menuLink.name}</StyledLink>
          </StyledListItem>
        ))}
      </StyledUL>
    </nav>
  );
}

export default Header;