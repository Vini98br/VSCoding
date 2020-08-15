import styled from 'styled-components';
import { ParallaxLayer } from "react-spring/renderprops-addons";
import { animated as a } from "react-spring";

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledParallaxLayer = styled(ParallaxLayer)`
  
`;

export const ImagesWrapper = styled.div`
  margin: 20px;
  display: grid;
  @media (min-width: 1080px){
    grid-template-columns: repeat(4, 1fr);
    /* grid-auto-rows: 200px; */
    grid-template-rows: repeat(7, 200px);
    grid-gap: 15px;
    div :nth-child(2) {
      grid-column: 3;
      grid-row: 2 / 3;
    }
    div :nth-child(4) {
      grid-column: 3 / 5;
      grid-row: 2 / 4;
    }
    div :nth-child(5) {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
    div :nth-child(7) {
      grid-column: 1 / 3;
      grid-row: 4 / 6;
    }
  }
  @media (min-width: 768px) and (max-width: 1079px){
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    div :nth-child(2) {
      grid-column: 2 / 4;
      grid-row: 2 / 4;
    }
    div :nth-child(6) {
      grid-column: 1 / 3;
      grid-row: 4 / 6;
    }
  }
  @media (min-width: 425px) and (max-width: 767px){
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    div :nth-child(4) {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
    div :nth-child(5) {
      grid-column: 1 / 3;
      grid-row: 4 / 6;
    }
    div :nth-child(6) {
      grid-column: 1 / 3;
      grid-row: 7 / 9;
    }
  }
  @media (max-width: 424px){
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
  }
`;

export const ImageItem = styled(a.div)<{index?: number}>`
  /*${props => props.index === 0 && 
    `
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    `
  };
   ${props => props.index === 1 && 
    `
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
    `
  };
   ${props => props.index === 3 && 
    `
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 2;
    `
  };
   ${props => props.index === 4 && 
    `
      grid-column-start: 3;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 4;
    `
  };
   ${props => props.index === 5 && 
    `
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    `
  };
  
   ${props => props.index === 6 && 
    `
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    `
  };*/
`;
