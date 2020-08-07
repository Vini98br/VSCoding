import styled from 'styled-components';

export const Container = styled.div`
  /* padding: 16px; */
  display: flex;
  align-items: center;
`;

export const Button = styled.button<{selected?: boolean, themeMode: string}>`
  background-color: ${props => props.selected ? props.theme.colors.foreground : props.themeMode === 'dark' ? '#000' : props.theme.colors.background};
  color: ${props => props.selected ? props.theme.colors.background : props.theme.colors.foreground};
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  width: 90px;
  outline: 0;
  border: unset;
  :first-child{
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  :last-child{
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;
