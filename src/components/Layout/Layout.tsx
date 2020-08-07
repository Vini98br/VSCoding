import React, { useRef } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";
import { Container, Content } from './styles';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  h2, p, body, input, button {
    font-family: ${props => props.theme.fontFamily};
  }
`;

const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              type
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

const Layout = ({children, pages, projects, offsets}) => {
  const { menuLinks } = useSiteMetadata(); 
  const parallax = useRef(null);
  return (
    <>
      <GlobalStyle />
      <Container pages={pages} scrolling ref={parallax}>
        <Header menuLinks={menuLinks} parallaxRef={parallax} projects={projects} offsets={offsets}/>
        <Content>
          {children}
        </Content>
        <Footer pages={pages} />
      </Container>
    </>
    
  );
}

export default Layout;