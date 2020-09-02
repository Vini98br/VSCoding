import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px 50px;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    justify-content:space-evenly;
    align-items: center;
  }
`;

export const Image = styled.img`
  @media (min-width: 426px) and (max-width: 660px) {
    height: 30%;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    height: 20%;
  }
  height: 40%;
  width: auto;
  z-index: 80;
  opacity: 1;
  box-shadow: 0px 1px 20px 0px ${props => props.theme.colors.foreground};
  border-radius: 5%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  width: 50%;
  @media (min-width: 426px) and (max-width: 660px) {
    width: 70%;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    width: 90%;
    text-align: justify;
  }
  justify-content:flex-start;
  align-items:center;
`;

export const Title = styled.h2`

`;

export const Description = styled.p`
  margin-top: 15px;
`;

export const Divider = styled.hr`
  width: 25%;
  border: 1px solid ${props => props.theme.colors.currentLine};
`;

