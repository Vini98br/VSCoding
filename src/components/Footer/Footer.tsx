import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

import { StyledParallaxLayer } from './styles';

export interface FooterProps {
  pages: number;
}

const Footer: React.FC<FooterProps> = ({pages}) => {
  return (
    <StyledParallaxLayer factor={0.05} offset={pages - 0.1}>
      © Copyright 2020
      <p>icones</p>
    </StyledParallaxLayer>
  );
}

export default Footer;