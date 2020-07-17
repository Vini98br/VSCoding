import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import { Container, Content } from './styles';
import { createGlobalStyle } from "styled-components";
import { theme } from "../../styles/theme";
export interface LayoutProps{
  children: any;
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Layout: React.FC = ({children}: LayoutProps) => {
  let parallax;
  return (
    <StaticQuery 
      query={graphql`
        query SiteTitleQuery {
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
      `}
      render={data => (
        <>
          <GlobalStyle theme={theme} />
          <Container pages={4} scrolling ref={ref => parallax = ref}>
            <Header menuLinks={data.site.siteMetadata.menuLinks} />
            <Content>
              {children}
            </Content>
            {/* <Footer /> */}
          </Container>
        </>
      )}
    />
  );
}

export default Layout;