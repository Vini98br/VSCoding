import React from 'react';

import { Container, Image, Content, Title, Description, Divider } from './styles';

const About: React.FC = () => {
  return (
    <Container>
      <Image src={'https://media-exp1.licdn.com/dms/image/C4D03AQFslH0kG98L1g/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=r29BdXpCDXInhDNRzSWZarVjNnEFU3arhkClHUTkJ5A'} />
      <Content>
        <Title>
          Sobre Mim
        </Title>
        <Divider />
        <Description>
        Me chamo <b>Vinícius Soranço</b> e sou desenvolvedor com 3 anos experiência, 1/3 desse tempo de dediquei no desenvolvimento Full-Stack Web e Mobile utilizando tecnologias ReactJS, React Native, Gatsby, NodeJS, dentre outros.
        Entusiasta da Stack Javascript ( ReactJS, React Native, NodeJS e etc).
        Em constante aperfeiçoamento pessoal e profissional.
        </Description>
      </Content>
    </Container>
  );
}

export default About;