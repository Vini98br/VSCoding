import styled from 'styled-components';
import { Link } from 'gatsby';
import Img, { GatsbyImageProps } from "gatsby-image";

export const ProjectTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.currentLine};
`;

export const ProjectDescription = styled.p`
  margin-top: 15px;
  color: ${props => props.theme.colors.currentLine};
  text-align: justify;
`;

export const Divider = styled.hr`
  width: 25%;
  border: 1px solid ${props => props.theme.colors.currentLine};
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

export const Techs = styled.span<{flexDirection?: string}>`
  color: ${props => props.theme.colors.currentLine};
  letter-spacing: 2px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 20px;
  display:flex;
  align-items: center;
  @media (max-width: 600px){
    flex-direction: ${props => props.flexDirection};
  }
`;

export const LittleLogo = styled(Img)<GatsbyImageProps>`
  width:auto;
  height: auto;
  margin: 0 10px;
  cursor: pointer;
`;

export const FeaturedImagesWrapper = styled.div`
  margin-top: 20px;
  width: auto;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px;
  grid-column-gap: 13px;
  grid-template-areas: "img img img sm";
  @media screen and (min-width: 425px) and (max-width:659px){
    img :last-of-type {
      display: none;
    }
    grid-template-columns: 100px 100px 100px;
    grid-template-areas: "img img sm";
  }
  @media screen and (max-width: 424px){
    img :nth-last-child(n+3) {
      display: none;
    }
    grid-template-columns: 80px 80px;
    grid-template-rows: 80px;  
    grid-template-areas: "img sm";
  }
`;

export const FeaturedImage = styled.img`
  grid-area: "img";
  width: 100%;
  height: 100%;
  border-radius: 2px;
  /* @media (max-width: 425px) {
    width: 80px;
    height: 80px;
  } */
`;

export const SeeMore = styled(Link)`
  && {
    grid-area: "sm";
    width: min-content;
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
  div {
    word-wrap: break-word;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const Container = styled.div<{invert?: boolean}>`
  margin-right:100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${SeeMore}{
    background-color: ${props => props.invert ? props.theme.colors.foreground : props.theme.colors.currentLine}c2;
    color: ${props => props.invert ? props.theme.colors.currentLine : props.theme.colors.foreground};
  }
  @media screen and (min-width:1081px){
    margin-right:${props => props.invert ? 'unset' : '100px'};;
    margin-left:${props => props.invert ? '100px' : 'unset'};
  }
  @media screen and (min-width: 660px) and (max-width:1080px){
    padding: 10px 40px;
    margin-right: unset;
    margin-left:unset;
    ${ProjectDescription} {
      font-size: 15px;
    }
    ${ProjectTitle} {
      font-size: 17px;
    }
    ${AvailableOn} span,span a, span{
      font-size: 15px;
    }
  }
  @media screen and (min-width: 425px) and (max-width:659px){
    padding: 10px 40px;
    margin-right: unset;
    margin-left:unset;
    ${ProjectDescription} {
      font-size: 14px;
    }
    ${ProjectTitle} {
      font-size: 16px;
    }
    ${AvailableOn} span,span a, span{
      font-size: 14px;
    }
  }
  @media screen and (max-width: 424px){
    padding: 10px 20px;
    margin-right: unset;
    margin-left:unset;
    ${ProjectDescription} {
      font-size: 13px;
    }
    ${ProjectTitle} {
      font-size: 15px;
    }
    ${AvailableOn} span,span a, span{
      font-size: 13px;
    }
  }
`;