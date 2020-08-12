const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const projects = await graphql(`
  {
    allPtJson {
      edges {
        node {
          projects {
            title
            offset
            smOffset
            mainImagePath
            description
            link
            imagesDirectory
            techs {
              name
              logoPath
              description
              link
            }
          }
        }
      }
    }
  }
  `);

  const projectTemplate = path.resolve(`src/templates/project.tsx`);

  projects.data.allPtJson.edges[0].node.projects.forEach(project => {
    createPage({
      path: `/${project.imagesDirectory}/`,
      component: projectTemplate,
      context:{
        imagesDirectory: project.imagesDirectory
      }
    });
  });
}