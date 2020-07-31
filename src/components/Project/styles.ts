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
  height: 50px;
  margin: 0 10px;
  cursor: pointer;
`;
