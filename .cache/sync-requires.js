const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/vinicius/code/mysite/.cache/dev-404-page.js"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/vinicius/code/mysite/src/pages/index.tsx"))),
  "component---src-pages-types-ts": hot(preferDefault(require("/home/vinicius/code/mysite/src/pages/types.ts")))
}

