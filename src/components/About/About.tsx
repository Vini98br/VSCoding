import React from 'react';

import { Container, Image, Content, Title, Description, Divider } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Image alt='me' src={require('../../../static/images/me.jpeg')} />
      <Content>
        <Title>
          Sobre Mim
        </Title>
        <Divider />
        <Description>
        Me chamo <b>Vinícius Soranço</b> e sou desenvolvedor com 3 anos experiência. Metade desse tempo me dediquei no desenvolvimento Full-Stack Web e Mobile utilizando tecnologias ReactJS, React Native, Gatsby, NodeJS, dentre outras.
        Entusiasta da Stack Javascript (ReactJS, React Native, NodeJS e etc). O [V(Vinicius) S(Soranço)Coding] surgiu com a ideia de aprender GatsbyJS e ter um site para mostrar projetos que estive envolvido.
        Em constante aperfeiçoamento pessoal e profissional.
        </Description>
      </Content>
    </Container>
  );
}

export default About;