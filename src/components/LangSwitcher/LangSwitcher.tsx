import React from 'react';
import { useTranslation } from "react-i18next";
import { Container, Button } from './styles';

const LangSwitcher: React.FC<{theme: string}> = ({theme}) => {
  const { i18n } = useTranslation();
  return (
    <Container>
      <Button themeMode={theme} onClick={() => i18n.language !== 'en' && i18n.changeLanguage('en')} selected={i18n.language === 'en'}>
        English
      </Button>
      <Button themeMode={theme} onClick={() => i18n.language !== 'pt' && i18n.changeLanguage('pt')} selected={i18n.language === 'pt'}>
        Português
      </Button>
    </Container>
  );
}

export default React.memo(LangSwitcher);