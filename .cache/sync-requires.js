const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/vinicius/code/mysite/src/pages/index.tsx"))),
  "component---src-templates-project-tsx": hot(preferDefault(require("/home/vinicius/code/mysite/src/templates/Project.tsx")))
}

