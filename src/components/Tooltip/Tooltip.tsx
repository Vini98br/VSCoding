import React from 'react'
import { Tooltip, TooltipProps } from "@material-ui/core";
// import {  } from "./styles";
import styled from 'styled-components';

export const StyledTooltip = styled(Tooltip)`
  &.customPopper{
    background-color:${props => props.theme.colors.currentLine}
  }
`;


export default function MyTooltip({children, title,...other}: TooltipProps) {
  
  return (
    <StyledTooltip 
      classes={{tooltip: 'customPopper'}}
      title={title} 
      arrow={true}
      {...other}
    >
      {children}
    </StyledTooltip>
  );
}
