import styled, { keyframes } from 'styled-components';
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
  height: 500px;
  opacity: 0.8;
  @media (min-width: 600px) and (max-width: 768px){
    width: 400px;
    height: 400px;
  }
  @media (max-width: 599px){
    width: 333px;
    height: 333px;
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
  button{
    background-color: ${props => props.invert ? props.theme.colors.purple : props.theme.colors.background};
    border: 1px solid ${props => props.invert ? props.theme.colors.purple : props.theme.colors.background};
    &:hover{
      background: ${props => props.invert ? '#a875f0 radial-gradient(circle, transparent 1%, #a875f0 1%) center/15000%' : 'black'};
      box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
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


export const Modal = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 100000; /* Sit on top */
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
`;

const zoom = keyframes`
  from {transform:scale(0)}
  to {transform:scale(1)}
`;

export const ModalImage = styled(Img)<GatsbyImageProps>`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 1000px;
  animation-name: ${zoom};
  animation-duration: .6s;
  @media only screen and (max-width: 700px){
    width: 95%;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-weight: bold;
  cursor: pointer;
  :hover {
    svg{
      transition: 0.3s;
      color: #bbb;
      text-decoration: none;
    }
  }
  svg{
    color: white;
    font-size: 30px;
  }
`;