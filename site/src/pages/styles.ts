import styled from 'styled-components';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

export const Container = styled.div`
  color: ${props => props.theme.colors.comment};
`;

export const StyledParallaxLayer = styled(ParallaxLayer)`
  background-color: ${props => props.theme.colors.purple};
  opacity:0.8;
  background-repeat: no-repeat;
  box-shadow:13px 0px 64px 70px rgba(189, 147, 249, 0.98);
  /* z-index:2; */
`;

export const StyledLogo = styled.img`
  /* opacity:0.1; */
  width:300px;
  filter: grayscale(70%) blur(3px);
  /* z-index:1; */
`;