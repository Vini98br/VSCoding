import React from 'react';

import { Container, Image, Content, Title, Description, Divider } from './styles';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Image alt='me' src={require('../../../static/images/me.jpeg')} />
      <Content>
        <Title>
          Sobre Mim
        </Title>
        <Divider />
        <Description>
          {t('about')}
        </Description>
      </Content>
    </Container>
  );
}

export default About;