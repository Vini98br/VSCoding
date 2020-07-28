import styled from 'styled-components';
import { Link } from "gatsby";

export const StyledListItem = styled.li`
  color: white;
  margin-left: 20px;
`;

export const StyledUL = styled.ul`
  height: 50px;
  width: 100vw;
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: flex-end;
  padding-right:40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily};
  font-weight: bolder;
  color: ${props => props.theme.colors.foreground};
  height: 50px;
  width: auto;
  display: block;
  text-align: center;
  line-height: 50px;
`;