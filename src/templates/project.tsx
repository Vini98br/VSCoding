import React from 'react';
import { graphql } from "gatsby";
// import { Container } from './styles';

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
  return <div>{(props as any).data.allFile.edges.map(a=> a.node.publicURL)}</div>;
}

export default ProjectTemplate;