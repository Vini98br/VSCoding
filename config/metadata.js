
module.exports = {
  title: 'VScoding',
  siteUrl: 'https://www.vscoding.com.br',
  description: '',
  menuLinks: [
    {
      "type": "link",
      "path": "/",
      "name": "Home",
    },
    {
      "type": "drop",
      "path": null,
      "name": "Projetos",
      "items": [
        {
          "type": "anchor",
          "name": "Site PorteJR",
        },
        {
          "type": "anchor",
          "name": "App Hipátia",
        },
        {
          "type": "anchor",
          "name": "E-commerce Avec",  
        }
      ]
    },
    // {
    //   "type": "link",
    //   "path": "/about",
    //   "name": "Sobre mim"
    // },
    {
      "type": "anchor",
      "path": "skills",
      "name": "Competências",
    },
    {
      "type": "anchor",
      "path": "contact",
      "name": "Contato",
    }
  ]
}