import React, { useCallback } from "react"
import { Container, StyledParallaxLayer, StyledLogo } from "./styles";
import Layout from "../components/Layout/Layout";
import { useTranslation } from "react-i18next";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import "../i18n/i18n";
import react from "../assets/images/logos/react.png";
import js from "../assets/images/logos/js.png";
import node from "../assets/images/logos/nodejs.png";
import gatsby from "../assets/images/logos/gatsby.png";

export default function Home() {
  const { t, i18n } = useTranslation();
  return( 
    <Layout>
      <StyledParallaxLayer offset={0.7} speed={0.7}>
        <div>Svrooll</div>
      </StyledParallaxLayer>
      <StyledParallaxLayer offset={1.99} speed={0.7}>
        <span>I'm fast!</span>
      </StyledParallaxLayer>
      <ParallaxLayer speed={-0.1} offset={1.3}>
        <StyledLogo src={react} /> 
      </ParallaxLayer>
      <ParallaxLayer speed={-0.1} offset={0.7}>
        <StyledLogo src={js} style={{position:'absolute', right:61,opacity: 0.2}} /> 
      </ParallaxLayer>
      <ParallaxLayer speed={-0.1} offset={1.7}>
        <StyledLogo src={node} style={{position:'absolute', left:321, opacity: 0.3}} /> 
      </ParallaxLayer>
      <ParallaxLayer speed={-0.1} offset={2.4}>
        <StyledLogo src={gatsby} style={{position:'absolute', right:261, opacity: 0.3}} /> 
      </ParallaxLayer>
    </Layout>
  );
}
