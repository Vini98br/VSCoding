import React, { useCallback, useRef, createRef } from "react"
import Layout from "../components/Layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "react-i18next";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import "../i18n/i18n";
import Project from "../components/Project/Project";
import Skills from "../components/Skills/Skills";
import ContactForm from "../components/ContactForm/ContactForm";
import About from "../components/About/About";
import { Helmet } from "react-helmet";
import { 
  Divider,
  StyledParallaxLayer,
  StyledLogo,
  StyledMainImage
} from "./styles";
import { object } from "yup";
import useMedia from "../hooks/useMedia";

const getIntRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const useHomeData = () => {
  const { allFile, allProjectsJson, allSkillsJson } = useStaticQuery(
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
        allSkillsJson(sort: {fields: rate, order: DESC}) {
          edges {
            node {
              id
              name
              rate
            }
          }
        }
        allProjectsJson {
          edges {
            node {
              description
              featuredImages {
                name
                path
              }
              id
              imagesDirectory
              link
              mainImagePath
              offset
              smOffset
              techs {
                description
                link
                name
                logoPath
              }
              title
            }
          }
        }
      }
    `
  );
  return {
    images: allFile.edges, 
    projects: allProjectsJson.edges.map(obj => obj.node),
    skills: allSkillsJson.edges.map(obj => obj.node)
  };
}

export interface ISkill {
  name: string;
  rate: number;
  id: number;
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
  featuredImages: Array<{
    name: string;
    path: string;
  }>
  title: string;
  offset: number;
  smOffset: number;
  mainImagePath:string;
}

export default function Home() {
  const { t, i18n } = useTranslation(['projects', 'translation']);
  const { height, width } = useMedia();
  const { images, projects, skills } = useHomeData();
  const isSM = height <= 667 || width <= 960;
  const pages = isSM ? 7 : 5;
  const offsets = {
    about:{
      md: pages - 1,
      sm: pages - 1.1
    },
    contact:{
      md: 3.3,
      sm: 4.9,
    },
    skills: {
      md: 2.5,
      sm: 3.2
    }
  };

  return(
    <>
      <Helmet>
        <html lang={i18n.language}/>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Vs coding is simple website as portfólio to show all projects i`ve made."></meta>
      </Helmet>
      <Layout pages={pages} projects={projects} offsets={offsets}>
        {projects.map((project: IProject, i: number) => (
          <StyledParallaxLayer key={project.title} invert={i % 2 !== 0} factor={isSM ? 1.2 : 0.8} offset={isSM ? project.smOffset : project.offset} speed={0.7}>
            <StyledMainImage src={project.mainImagePath} alt={project.title}/>
            <Project project={project} index={i} />
          </StyledParallaxLayer>
        ))} 
        <StyledParallaxLayer invert factor={isSM ? 2 : 0.8} offset={isSM ? offsets.skills.sm : offsets.skills.md} speed={0.7}>
          <Skills skills={skills} />
        </StyledParallaxLayer>
        <StyledParallaxLayer factor={isSM ? 1.2 : 0.99} offset={isSM ? offsets.contact.sm : offsets.contact.md} speed={0.7}>
          <ContactForm />
        </StyledParallaxLayer>
        <StyledParallaxLayer invert factor={isSM ? 1.2 : 0.99} offset={isSM ? offsets.about.sm : offsets.about.md} speed={0.7}>
          <About />
        </StyledParallaxLayer>
        {images
          .filter((image: any) => image.node.name[0] !== '_' )
          .map((obj: any, i: number) => (
            <ParallaxLayer key={obj.node.id} speed={-0.1} offset={(i * 0.6) + 0.5}>
              <StyledLogo src={obj.node.publicURL} alt={obj.node.name} style={{position:'absolute', right: getIntRandomNumber(20,width),opacity: 0.2}}/> 
            </ParallaxLayer>
        ))}
      </Layout>
    </>
  );
}
