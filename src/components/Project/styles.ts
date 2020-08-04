import styled from 'styled-components';

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

export const Techs = styled.span`
  color: ${props => props.theme.colors.currentLine};
  letter-spacing: 2px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 20px;
  display:flex;
  align-items: center;
`;

export const LittleLogo = styled.img`
  width:auto;
  height: auto;
  margin: 0 10px;
  cursor: pointer;
`;

export const Container = styled.div<{invert?: boolean}>`
  margin-right:100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    padding: 10px 40px;
    margin-right: unset;
    margin-left:unset;
    ${ProjectDescription} {
      font-size: 13px;
      text-align: center;
    }
    ${ProjectTitle} {
      font-size: 15px;
    }
    ${AvailableOn} span,span a, span{
      font-size: 13px;
    }
  }
`;
