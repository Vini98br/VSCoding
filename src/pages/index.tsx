import React from "react"
import Layout from "../components/Layout/Layout";
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import "../i18n/i18n";
import Project from "../components/Project/Project";
import Skills from "../components/Skills/Skills";
import ContactForm from "../components/ContactForm/ContactForm";
import About from "../components/About/About";
import { CloseOutlined } from "@ant-design/icons";
import { 
  StyledParallaxLayer,
  StyledLogo,
  StyledMainImage,
  MyLogo,
  LogoWrapper,
  Modal,
  ModalImage,
  CloseButton
} from "./styles";
import useMedia from "../hooks/useMedia";
import useHomeData from "../hooks/useHomeData";
import { useGlobalState } from "../state/index";
import { IProject } from "./types";

const getIntRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

export default function Home() {
  const { modalImage, setModalImage } = useGlobalState();
  const { height, width } = useMedia();
  const { logos, projects, skills, images } = useHomeData();
  const isSM = height <= 667 || width <= 1080;
  const pages = isSM ? 8 : 6;
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
      md: projects.length - 1,
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
              images={images[project.imagesDirectory]} 
              techsImages={
                [...project.techs.map(tech => {
                  return logos.find(obj => obj.name === tech.name)?.thumbnail;
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
        {logos
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
      {modalImage &&
        <Modal>
          <CloseButton onClick={() => setModalImage(null)}>
            <CloseOutlined/>
          </CloseButton>
          <ModalImage fluid={modalImage} />
        </Modal> 
      }
    </>
  );
}
