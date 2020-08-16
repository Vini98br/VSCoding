import { ParallaxLayer } from 'react-spring/renderprops-addons';
import styled from 'styled-components';
import { Button } from "antd";

export const StyledParallaxLayer = styled(ParallaxLayer)`
  background-color: ${props => props.theme.colors.currentLine};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 130px;
  position: absolute;
  bottom:0;
  @media (min-width: 425px) and (max-width: 768px){
    flex-direction: column-reverse;
    justify-content: center;
  }
  @media (max-width: 424px){
    flex-direction: column-reverse;
    justify-content: center;
    padding: 0 10px;
  }
`;

export const IconsWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
  color: ${props => props.theme.colors.foreground};
`;

export const Copyright = styled.p`
  color:${props => props.theme.colors.foreground};
  font-size: 13px;
  letter-spacing: 0.8px;
  font-weight:300;
  && {
    margin-bottom: 0;
  }
`;

export const IconButton = styled(Button)`
  &&{
    border: unset;
    background-color: unset;
    color: ${props => props.theme.colors.foreground};
    :hover{
      background-color: ${props => props.theme.colors.foreground};
      color: ${props => props.theme.colors.background};
    }
    :active{
      color: ${props => props.theme.colors.pink};
    }
    :focus{
      color: ${props => props.theme.colors.pink};
    }
  }
`;
