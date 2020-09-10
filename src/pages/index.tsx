import React from "react"
import Layout from "../components/Layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import "../i18n/i18n";
import Project from "../components/Project/Project";
import Skills from "../components/Skills/Skills";
import ContactForm from "../components/ContactForm/ContactForm";
import About from "../components/About/About";
import { 
  StyledParallaxLayer,
  StyledLogo,
  StyledMainImage,
  MyLogo,
  LogoWrapper
} from "./styles";
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
              mobile: childImageSharp {
                fixed(width: 150) {
                  originalName
                  ...GatsbyImageSharpFixed
                }
              }
              desktop: childImageSharp {
                fixed(width: 250) {
                  originalName
                  ...GatsbyImageSharpFixed
                }
              }
              thumbnail: childImageSharp {
                fixed(height: 40) {
                  originalName
                  ...GatsbyImageSharpFixed
                }
              }
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
    images: [...allFile.edges.map(obj=> obj.node)], 
    projects:[...allProjectsJson.edges.map(obj => obj.node)],
    skills: [...allSkillsJson.edges.map(obj => obj.node)]
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
  const { height, width } = useMedia();
  const { images, projects, skills } = useHomeData();
  const isSM = height <= 667 || width <= 1080;
  const pages = isSM ? 7 : 5;
  const offsets = {
    about:{
      md: pages - 1,
      sm: pages - 1.1
    },
    contact:{
      md: projects.length + 0.3,
      sm: projects.length + 1.9,
    },
    skills: {
      md: projects.length - 0.5,
      sm: projects.length + 0.2
    }
  };

  return(
    <>
      <Layout pages={pages} projects={projects} offsets={offsets}>
        <StyledParallaxLayer invert factor={0.5} offset={0}>
          <LogoWrapper>
            <MyLogo src={require('../../static/images/main.png')} alt='VSCoding-logo' />
          </LogoWrapper>
        </StyledParallaxLayer>
        {projects.map((project: IProject, i: number) => (
          <StyledParallaxLayer key={project.title} invert={i % 2 !== 0} factor={isSM ? 1.2 : 0.8} offset={isSM ? project.smOffset : project.offset} speed={0.7}>
            <StyledMainImage src={project.mainImagePath} alt={project.title}/>
            <Project 
              project={project} 
              techsImages={
                [...project.techs.map(tech => {
                  return images.find(obj => obj.name === tech.name)?.thumbnail;
                })]
              } 
              index={i} 
            />
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
          .filter((image: any) => image.name.charAt(0) !== '_' )
          .map((obj: any, i: number) => (
            <ParallaxLayer key={obj.id} speed={-0.1} offset={(i * 0.6) + 0.5}>
              {/* <StyledLogo src={obj.node.publicURL} alt={obj.node.name} style={{position:'absolute', right: getIntRandomNumber(20,width),opacity: 0.2}}/>  */}
              <StyledLogo 
                fixed={[
                  obj.mobile.fixed,
                  {
                    ...obj.desktop.fixed,
                    media: `(min-width: 768px)`,
                  },
                ]} 
                imgStyle={{opacity: 0.2}} 
                style={{position:'absolute', right: getIntRandomNumber(50,width)}}
              /> 
            </ParallaxLayer>
        ))}
      </Layout>
    </>
  );
}
