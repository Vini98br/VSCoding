const path = require('path');
exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions;
  // if(node.internal.type === 'File')
  //   console.log(JSON.stringify(node, undefined, 4))
  // if(node.internal.type === 'ProjectsJson')
  // console.log(node.imagesDirectory)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const projects = await graphql(`
  {
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
  `);

  const projectTemplate = path.resolve(`src/templates/Project.tsx`);

  projects.data.allProjectsJson.edges.map(obj => obj.node).forEach(project => {
    createPage({
      path: `/gallery/${project.imagesDirectory}/`,
      component: projectTemplate,
      context:{
        imagesDirectory: project.imagesDirectory
      }
    });
  });
}