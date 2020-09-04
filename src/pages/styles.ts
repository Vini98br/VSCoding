import styled from 'styled-components';
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Img, { GatsbyImageProps } from 'gatsby-image';

export const Container = styled.div`
  color: ${props => props.theme.colors.comment};
`;

export const StyledMainImage = styled.img`
  z-index: 2;
  width: 600px;
`;

// export const StyledLogo = styled.img`
//   width:300px;
//   filter: grayscale(70%) blur(3px);
//   z-index:1;
//   @media (min-width: 660px) and (max-width:1080px){
//     width: 200px;
//   }
//   @media (min-width: 425px) and (max-width:659px){
//     width: 170px;
//   }
//   @media (max-width:424px),  (max-height: 768px){
//     width: 150px;
//   }

// `;
export const StyledLogo = styled(Img)<GatsbyImageProps>`
  &&{
    filter: grayscale(70%) blur(3px);
    z-index:1;
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 200px;
  @media (max-width: 768px){
    justify-content: center;
    padding: 0;
  }
`;

export const MyLogo = styled.img`
  width: 500px;
  height: auto;
  opacity: 0.8;
  @media (min-width: 600px) and (max-width: 768px){
    width: 400px;
  }
  @media (max-width: 599px){
    width: 80%;
  }
`;

export const StyledParallaxLayer = styled(ParallaxLayer)<{invert?: boolean}>`
  background-color: ${props => props.invert ? 'unset' : props.theme.colors.foreground}d1;
  opacity: ${props => props.invert ? 1 : 0.8};
  background-repeat: no-repeat;
  /* box-shadow:13px 0px 64px 70px rgba(98, 114, 164, 0.98); */
  box-shadow: ${props => props.invert ? 'unset' : '13px 0px 64px 70px rgba(248, 248, 242,0.83)'};
  z-index:1;
  display: flex;
  flex-direction: ${props => props.invert ? 'row-reverse' : 'row'};
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width:1080px){
    flex-direction: ${props => props.invert ? 'column-reverse' : 'column'};
    justify-content: center;
  }
  @media screen and (min-width: 660px) and (max-width:1080px){
    ${StyledMainImage} {
      width: 400px;
    }
  }
  @media screen and (min-width: 425px) and (max-width:659px){
    ${StyledMainImage} {
      width: 300px;
    }
  }
  @media screen and (max-width:424px),  (max-height: 768px){
    ${StyledMainImage} {
      width: 200px;
    }
  }
  span, p, h2, span a{
    color: ${props => props.invert ? props.theme.colors.foreground : props.theme.colors.currentLine};
  }
  hr{
    border: 1px solid ${props => props.invert ? props.theme.colors.foreground : props.theme.colors.currentLine};
  }
  input, textarea {
    background-color:  ${props => props.invert ? 'rgba(248, 248, 242,0.98)' : 'unset'}
  }
  label {
    color: ${props => props.invert && 'rgba(248, 248, 242,0.98)'}
  }
`;

export const Divider = styled.hr`
  width: 25%;
  border: 1px solid ${props => props.theme.colors.currentLine};
`;

