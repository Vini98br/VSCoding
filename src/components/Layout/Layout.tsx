import React, { useRef } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Content, Anchor } from './styles';
import { createGlobalStyle } from "styled-components";
import Seo from '../Seo/Seo';

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
    font-family: ${props => props.theme.fontFamily}, 'Archivo';
  }
`;

const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              name
              link
            }
            menuLinks {
              name
              type
              identifier
              path
              items {
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
  const { menuLinks, social, title, siteUrl, description } = useSiteMetadata(); 
  const parallax = useRef(null);
  return (
    <>
      <GlobalStyle />
      <Container pages={pages} scrolling ref={parallax}>
        <Seo 
          title={title}
          description={description}
          url={siteUrl}
          image={require('../../../static/images/logos/_mylogo.png')}
        />
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