import styled from 'styled-components';
import img from "../../assets/images/backgroundv1.png";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

export const Container = styled(Parallax)`
  height: 100vh;
  font-family:${props => props.theme.fontFamily};
  background-image: url(${img});
`;

export const Content = styled.div`
  
`;
