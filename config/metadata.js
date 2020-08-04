
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
    // {
    //   "type": "link",
    //   "path": "/about",
    //   "name": "Sobre mim"
    // },
    {
      "type": "anchor",
      "path": null,
      "name": "Competências",
    },
    {
      "type": "anchor",
      "path": "contact",
      "name": "Contato",
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
    }
  ]
}