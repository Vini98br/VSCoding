import React from 'react'
import { Tooltip } from 'antd';
import styled from 'styled-components';
import { TooltipProps } from 'antd/lib/tooltip';

export const StyledTooltip = styled(Tooltip)`
  &.customPopper{
    background-color:${props => props.theme.colors.background}
  }
`;

function MyTooltip({children, title,...other}: TooltipProps) {
  return (
    <StyledTooltip 
      placement='bottom'
      color='#282a36'
      title={title} 
      {...other}
    >
      {children}
    </StyledTooltip>
  );
}

export default React.memo(MyTooltip);