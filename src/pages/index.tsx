import React, { useCallback } from "react"
import Layout from "../components/Layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "react-i18next";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import "../i18n/i18n";
import Tooltip from "../components/Tooltip/Tooltip";
import ContactForm from "../components/ContactForm/ContactForm";
import { 
  Container, ProjectTitle, ProjectDiv, Divider,
  StyledParallaxLayer, ProjectDescription,
  Techs, LittleLogo, StyledLogo, AvailableOn,
  StyledMonitor
} from "./styles";

const getIntRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const useHomeData = () => {
  const { allFile, ptJson } = useStaticQuery(
    graphql`
      {
        allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "logos"}}) {
          edges {
            node {
              id
              name
              publicURL
            }
          }
        }
        ptJson {
          projects {
            title
            mainImagePath
            description
            imagesDirectory
            link
            techs {
              description
              link
              name
              logoPath
            }
          }
        }
      }
    `
  );
  return {images: allFile.edges, projects: ptJson.projects};
}

interface Tech {
  description: string; 
  link: string;
  name: string;
  logoPath: string;
}

interface Project {
  description: string;
  imagesDirectory: string;
  link: string;
  techs: Tech[];
  title: string;
  mainImagePath:string;
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const { images, projects } = useHomeData();
  const pages = 5;
  console.log(i18n.language)
  const isSSR = typeof window === "undefined";
  return( 
    !isSSR &&
    <Layout pages={pages}>
        <button onClick={(e)=>{
          e.preventDefault()
          i18n.changeLanguage('pt')}}>pt</button>
        <button onClick={(e)=>{
          e.preventDefault()
          i18n.changeLanguage('en')}}>en</button>
      {projects.map((project: Project, i: number) => (
        i % 2 === 0 ? 
          <StyledParallaxLayer invert={i % 2 !== 0} factor={0.8} offset={0.7} speed={0.7}>
            <StyledMonitor src={project.mainImagePath}/>
            <ProjectDiv>
              <ProjectTitle>{t(`projects.${i}.title`)}</ProjectTitle>
              <Divider />
              <AvailableOn>
                Disponível em:
                <a href={`http://${project.link}`} target="_blank" rel="noopener noreferrer">{project.link}</a>
              </AvailableOn>
              <ProjectDescription>{t(`projects.${i}.description`)}</ProjectDescription>
              <Techs>
                Techs: 
                {project.techs.map((obj, j) => (
                  <Tooltip title={t(`projects.${i}.techs.${j}.description`)}>
                    <LittleLogo src={obj.logoPath} onClick={() => window.open(obj.link, '_blank')} style={{width: 50}}/> 
                  </Tooltip>
                ))}
              </Techs>
              <Divider />
            </ProjectDiv>
          </StyledParallaxLayer>
        :
          <StyledParallaxLayer invert={i % 2 !== 0} factor={0.8} offset={1} speed={0.7}>
            <ProjectDiv>
              <ProjectTitle>{t(`projects.${i}.title`)}</ProjectTitle>
              <Divider />
              {!!project.link &&
                <AvailableOn>
                  Disponível em:
                  <a href={`http://${project.link}`} target="_blank" rel="noopener noreferrer">{project.link}</a>
                </AvailableOn>
              }
              <ProjectDescription>{t(`projects.${i}.description`)}</ProjectDescription>
              <Techs>
                Techs: 
                {project.techs.map((obj, j) => (
                  <Tooltip title={t(`projects.${i}.techs.${j}.description`)}>
                    <LittleLogo src={obj.logoPath} onClick={() => window.open(obj.link, '_blank')}/> 
                  </Tooltip>
                ))}
              </Techs>
              <Divider />
            </ProjectDiv>
            <StyledMonitor src={project.mainImagePath}/>
          </StyledParallaxLayer>
      ))} 
      <StyledParallaxLayer factor={0.8} offset={1.95} speed={0.7}>
        <ContactForm />
      </StyledParallaxLayer>
      {images.filter(image => image.node.name[0] !== '_' ).map((obj, i) => (
        <div id={obj.node.id} >
          <ParallaxLayer speed={-0.1} offset={(i * 0.6) + 0.5}>
            <StyledLogo src={obj.node.publicURL} style={{position:'absolute', right:getIntRandomNumber(50,900),opacity: 0.2}}/> 
          </ParallaxLayer>
        </div>
      ))}
    </Layout>
  );
}
