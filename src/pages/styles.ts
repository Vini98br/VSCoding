import styled from 'styled-components';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

export const Container = styled.div`
  color: ${props => props.theme.colors.comment};
`;

export const ProjectDiv = styled.div`
  margin-right:100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledParallaxLayer = styled(ParallaxLayer)<{invert: boolean}>`
  background-color: ${props => props.invert ? 'unset' : props.theme.colors.foreground};
  opacity:0.8;
  background-repeat: no-repeat;
  /* box-shadow:13px 0px 64px 70px rgba(98, 114, 164, 0.98); */
  box-shadow: ${props => props.invert ? 'unset' : '13px 0px 64px 70px rgba(248, 248, 242,0.98)'};
  z-index:1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span, p, h2, span a{
    color: ${props => props.invert ? props.theme.colors.foreground : props.theme.colors.currentLine};
  }
  hr{
    border: 1px solid ${props => props.invert ? props.theme.colors.foreground : props.theme.colors.currentLine};
  }
  ${ProjectDiv} {
    margin-right:${props => props.invert ? 'unset' : '100px'};;
    margin-left:${props => props.invert ? '100px' : 'unset'};
  }
  
`;

export const StyledCyanParallaxLayer = styled(ParallaxLayer)`
  background-color: ${props => props.theme.colors.cyan};
  opacity:0.8;
  background-repeat: no-repeat;
  box-shadow:13px 0px 64px 70px rgba(139, 233, 253, 0.98);
  z-index:1;
`;


export const StyledLogo = styled.img`
  width:300px;
  filter: grayscale(70%) blur(3px);
  z-index:1;
`;

export const StyledMonitor = styled.img`
  z-index: 2;
  width: 600px;
  /* position: absolute; */
  /* left: -109px; */
`;

export const ProjectTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.currentLine};
`;

export const ProjectDescription = styled.p`
  margin-top: 15px;
  color: ${props => props.theme.colors.currentLine};
`;

export const Divider = styled.hr`
  width: 25%;
  border: 1px solid ${props => props.theme.colors.currentLine};
`;

export const Techs = styled.span`
  color: ${props => props.theme.colors.currentLine};
  letter-spacing: 2px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 20px;
  display:flex;
  align-items: center;
`;

export const AvailableOn = styled.span`
  color: ${props => props.theme.colors.currentLine};
  letter-spacing: 2px;
  font-weight: bold;
  margin-top: 15px;
  display:flex;
  align-items: center;
  a{
    font-weight: 400;
    margin-left: 10px;
    color: ${props => props.theme.colors.currentLine};
  }
`;

export const LittleLogo = styled.img`
  width:30px;
  margin: 0 10px;
  cursor: pointer;
`;