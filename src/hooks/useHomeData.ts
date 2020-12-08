import { graphql, useStaticQuery } from "gatsby";

const useHomeData = () => {
  const { allFile, allProjectsJson, allSkillsJson, porte, hipatia, avec, wpp } = useStaticQuery(
    graphql`
      {
        porte: allFile(filter: {relativeDirectory: {eq: "porte"}}) {
          edges {
          ...ProjectImages
          }
        }
        
        hipatia: allFile(filter: {relativeDirectory: {eq: "hipatia"}}) {
          edges {
          ...ProjectImages
          }
        }
        
        avec: allFile(filter: {relativeDirectory: {eq: "avec"}}) {
          edges {
          ...ProjectImages
          }
        }
        wpp: allFile(filter: {relativeDirectory: {eq: "wpp"}}) {
          edges {
          ...ProjectImages  
          }
        }
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
    images: {
      porte: [...porte.edges.map(obj=> obj.node)],
      hipatia: [...hipatia.edges.map(obj=> obj.node)],
      avec: [...avec.edges.map(obj=> obj.node)],
      wpp: [...wpp.edges.map(obj=> obj.node)]
    },
    logos: [...allFile.edges.map(obj=> obj.node)], 
    projects:[...allProjectsJson.edges.map(obj => obj.node)],
    skills: [...allSkillsJson.edges.map(obj => obj.node)]
  };
}

export default useHomeData;