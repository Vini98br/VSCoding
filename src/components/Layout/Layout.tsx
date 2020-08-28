import React, { useRef } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";
import { Container, Content, Anchor } from './styles';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  /* body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
  html {
    height: -webkit-fill-available;track
  } */

  h2, p, body, input, button {
    font-family: ${props => props.theme.fontFamily};
  }

  /* ::-webkit-scrollbar {
    width: 6px;
    height: 30px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.foreground};
    border-radius: 30px;
    padding: 0 20px;
    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    /* background: linear-gradient(90deg,${props => props.theme.colors.background},${props => props.theme.colors.background} 1px,${props => props.theme.colors.background} 0,${props => props.theme.colors.background}); 
  } */
`;

const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              name
              link
            }
            menuLinks {
              name
              type
              identifier
              path
              items{
                name
                type
              }
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
}

export interface LayoutProps {
  pages: any;
  projects?: any; 
  offsets?: any;
}

const Layout: React.FC<LayoutProps> = ({children, pages, projects, offsets}) => {
  const { menuLinks, social } = useSiteMetadata(); 
  const parallax = useRef(null);
  return (
    <>
      <GlobalStyle />
      <Container pages={pages} scrolling ref={parallax}>
        <Anchor>
          <Header menuLinks={menuLinks} parallaxRef={parallax} projects={projects} offsets={offsets}/>
          <Content>
            {children}
          </Content>
          <Footer pages={pages} social={social} />
        </Anchor>
      </Container>
    </>
    
  );
}

export default Layout;