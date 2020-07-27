import React from 'react';
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
              link
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
}

const Layout = ({children, pages}) => {
  const { menuLinks } = useSiteMetadata(); 
  let parallax;
  return (
    <>
      <GlobalStyle theme={theme} />
      <Container pages={pages} scrolling ref={ref => parallax = ref}>
        <Header menuLinks={menuLinks} />
        <Content>
          {children}
        </Content>
        {/* <Footer /> */}
      </Container>
    </>
  );
}

export default Layout;