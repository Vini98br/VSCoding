
module.exports = {
  title: 'VSCoding',
  siteUrl: 'https://vscoding.com.br',
  description: 'VSCoding is simple website as portfólio to show all projects i`ve made.',
  social: [
    {
      "name": "GitHub",
      "link": "https://github.com/Vini98br",
    },
    {
      "name": "Linkedin",
      "link": "https://www.linkedin.com/in/vinicius-soran%C3%A7o/",
    },
    {
      "name": "Instagram",
      "link": "https://www.instagram.com/vinicius.soranco/",
    }
  ],
  menuLinks: [
    {
      "type": "link",
      "path": "/",
      "name": "Home",
      "identifier": "home"
    },
    {
      "type": "anchor",
      "path": "about",
      "identifier": "aboutSectionTitle",
      "name": "Sobre mim",
    },
    {
      "type": "drop",
      "path": null,
      "identifier": "projectsSectionTitle",
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
      "identifier": "skillSectionTitle",
      "name": "Competências",
    },
    {
      "type": "anchor",
      "path": "contact",
      "identifier": "contactSectionTitle",
      "name": "Contato",
    }
  ]
}