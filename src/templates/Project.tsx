import React, { useState, useRef } from 'react';
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { Image, StyledParallaxLayer, ImagesWrapper, ImageItem } from './styles';
import ImageGallery from 'react-image-gallery';
import { useTransition, animated as a } from "react-spring";
import useMedia from '../hooks/useMedia';
export const query = graphql`
  query ($imagesDirectory:String!){
    allFile(filter: {relativeDirectory: {eq: $imagesDirectory}}) {
      edges {
        node {
          id
          publicURL
        }
      }
    }
  }
`;

const ProjectTemplate: React.FC = (props) => {
  const [items, setItems] = useState((props as any).data.allFile.edges);
  const { width } = useMedia();
  const isSM = width > 470 && width <= 767; 
  const isXS = width <= 469; 
  const getPagesNumber = () => {
    if(isSM)
      return 3;
    else if(isXS)
      return 3.9;
    else
      return 2;
  }
  const transitions = useTransition(items, item => item.node.id, {
    from: { transform: 'translate3d(-150px,0px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    // update: { transform: 'translate3d(0,-40px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
    config: { mass: 5, tension: 500, friction: 100 },
    // trail: 25
  });

  return (
  // <ImageGallery items={items.map(obj => ({
  //   original: obj.node.publicURL,
  //   thumbnail: obj.node.publicURL,
  //   sizes: 200
  // }))}/>
  <Layout pages={getPagesNumber()}>
    <StyledParallaxLayer>
      <ImagesWrapper>
      {transitions.map(({ item, props, key }, i) => (
        <ImageItem key={key} style={props}>
          <Image src={item.node.publicURL}/>
        </ImageItem>
      ))}
      </ImagesWrapper>
    </StyledParallaxLayer>
  </Layout>
  );
}

export default ProjectTemplate;