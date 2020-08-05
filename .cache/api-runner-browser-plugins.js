module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-174028885-1","head":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#ff79c6"},
    },{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://www.vscoding.com.br"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
