import styled from 'styled-components';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

export const Container = styled(Parallax)`
  height: 100vh;
  font-family:${props => props.theme.fontFamily};
  background-image: url('/images/backgroundv2.png');
`;

export const Content = styled.div`
  
`;
