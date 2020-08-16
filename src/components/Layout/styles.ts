import styled from 'styled-components';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

export const Container = styled(Parallax)`
  height: 100vh;
  font-family:${props => props.theme.fontFamily};
  background-image: url('/images/3.jpeg');
`;

export const Content = styled.div`
  
`;

export const Anchor = styled.div` 
  position: relative; 
  width: 100%;
  height: 100%;
`;