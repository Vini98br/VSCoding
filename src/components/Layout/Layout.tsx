import React, { useRef } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";
import { Container, Content } from './styles';
import { createGlobalStyle } from "styled-components";
import theme, {ThemeType} from "../../styles/theme";

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  h2, p{
    font-family: ${({theme}) => theme.fontFamily};
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
      <GlobalStyle theme={theme} />
        <Container pages={pages} scrolling ref={parallax}>
          <Header menuLinks={menuLinks} parallaxRef={parallax} projects={projects} offsets={offsets}/>
          <Content>
            {children}
          </Content>
          {/* <Footer /> */}
        </Container>
    </>
    
  );
}

export default Layout;