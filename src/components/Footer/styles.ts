import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';

export const StyledParallaxLayer = styled(ParallaxLayer)`
  background-color: ${props => props.theme.colors.currentLine};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 130px;
`;