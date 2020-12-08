import styled from 'styled-components';
import Slider from "react-slick";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IconButton = styled.button<{disabled: boolean, invert:boolean}>`
  && {
    background-color: unset;
    border: 2px solid ${props => props.disabled ? '#b0b0b0' : props.invert ? 'white' : 'black'};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    svg{
      color: ${props => props.disabled && '#b0b0b0' }
    }
    &:hover{
      background-color: ${props => props.disabled ? 'unset' : props.invert ? '#424242' : 'white'};
      box-shadow: ${props => props.disabled && 'unset'}; 
    }
    &:focus{
      outline: none;
    }
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: 500px;
`;

export const ImagesList = styled.ul`
  width: 500px;
  
`;

export const ImageItem = styled.li`
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: opacity .3s;
  :hover{
    opacity:0.5;
  }
`;

export const StyledSlider = styled(Slider)`
  width: 500px;
  @media (min-width: 451px) and (max-width: 661px) {
    width: 350px;
  }
  @media (max-width: 450px) {
    width: 250px;
  }
  margin: 25px 0;
`;
