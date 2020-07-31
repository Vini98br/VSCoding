import React, { useCallback } from "react"
import Layout from "../components/Layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "react-i18next";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import "../i18n/i18n";
import Project from "../components/Project/Project";
import Skills from "../components/Skills/Skills";
import ContactForm from "../components/ContactForm/ContactForm";
import { Helmet } from "react-helmet";
import { 
  Divider,
  StyledParallaxLayer,
  StyledLogo,
  StyledMainImage
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
            offset
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
          skills {
            name
            rate
          }
        }
      }
    `
  );
  return {
    images: allFile.edges, 
    projects: ptJson.projects,
    skills: ptJson.skills
  };
}

export interface ISkill {
  name: string;
  rate: number;
}

interface Tech {
  description: string; 
  link: string;
  name: string;
  logoPath: string;
}

export interface IProject {
  description: string;
  imagesDirectory: string;
  link: string;
  techs: Tech[];
  title: string;
  offset: number;
  mainImagePath:string;
}

export default function Home() {
  const { t, i18n } = useTranslation();
  const { images, projects, skills } = useHomeData();
  const pages = 5;
  return(
    <>
      <Helmet>
        <html lang={i18n.language}/>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Vs coding is simple website as portfólio to show all projects i`ve made."></meta>
      </Helmet>
      <Layout pages={pages}>
          <button onClick={(e)=>{
            e.preventDefault()
            i18n.changeLanguage('pt')}}>pt</button>
          <button onClick={(e)=>{
            e.preventDefault()
            i18n.changeLanguage('en')}}>en</button>
        {projects.map((project: IProject, i: number) => (
          <StyledParallaxLayer invert={i % 2 !== 0} factor={0.8} offset={project.offset} speed={0.7}>
            <StyledMainImage src={project.mainImagePath} alt={project.title}/>
            <Project project={project} index={i} />
          </StyledParallaxLayer>
        ))} 
        <StyledParallaxLayer invert factor={0.8} offset={2.20} speed={0.7}>
          <Skills skills={skills} />
        </StyledParallaxLayer>
        <StyledParallaxLayer factor={0.8} offset={3} speed={0.7}>
          <ContactForm />
        </StyledParallaxLayer>
        {images.filter(image => image.node.name[0] !== '_' ).map((obj, i) => (
          <div id={obj.node.id} >
            <ParallaxLayer speed={-0.1} offset={(i * 0.6) + 0.5}>
              <StyledLogo src={obj.node.publicURL} alt={obj.node.name} style={{position:'absolute', right:getIntRandomNumber(50,900),opacity: 0.2}}/> 
            </ParallaxLayer>
          </div>
        ))}
      </Layout>
    </>
  );
}
