import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const {site} = 
  useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              name
              link
            }
            menuLinks {
              name
              type
              identifier
              path
              items {
                name
                type
              }
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
}

export default useSiteMetadata;