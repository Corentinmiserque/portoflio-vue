// src/store/projects.js

import { defineStore } from 'pinia';

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [
      {
        title: 'Courir',
        text: 'work in progress.',
        tag: ['Pwa', 'Vue', 'Bulma', 'Offline' , 'Solo'], 
        picture: { url: "/Courir.png", alt: 'Courir' },
        github: 'https://github.com/Corentinmiserque/courir',
        url: 'https://courir.netlify.app/homepage',
      },
      {
        title: 'IMEP',
        text: 'work in progress.',
        tag: ['Twig', 'Scss', 'Team'], 
        picture: { url: "/IMEP.png", alt: 'IMEP' },
        url: 'https://www.imep.be/',
      },

      {
        title: 'Pendu',
        text: 'work in progress.',
        tag: ['Javascript','Solo'], 
        picture: { url: "Pendu.png", alt: 'Pendu' },
        url: 'https://xf383y.csb.app/',
        codesandbox: 'https://codesandbox.io/p/sandbox/ex2-starter-forked-xf383y?file=%2Fdraw.io.diagram.drawio.xml',
      },

      {
        title: 'Food Matcher',
        text: 'work in progress.',
        tag: [ 'Javascript', 'Solo'], 
        picture: { url: "/Fruits-Matcher.png", alt: 'Fruits Matcher' },
        url: 'https://gljqp7.csb.app/',
        codesandbox:"https://codesandbox.io/p/sandbox/ex4-starter-forked-gljqp7?file=%2Fsrc%2Findex.js"
      },

      {
        title: 'COGIP',
        text: 'work in progress.',
        tag: ['React', 'Scss', 'Team'], 
        picture: { url: "/COGIP.png", alt: 'COGIP' },
        url: 'https://cogip-project-team2.000webhostapp.com//',
        github:"https://github.com/Corentinmiserque/Cogip_Project"
      },
      {
        title: 'Az-Store',
        text: 'work in progress.',
        tag: ['Php', 'Scss', "Html" ,'Team'], 
        picture: { url: "/Az-Store.png", alt: 'Az-Store' },
        url: 'https://miserque-corentin.com/',
        github:"https://github.com/Corentinmiserque/AZ-Store"
      },
      {
        title: 'Dark Kitchen',
        text: 'work in progress.',
        tag: ['Javascript', 'Html', 'Scss', 'Team'], 
        picture: { url: "/Dark-Kitchen.png", alt: 'Dark-Kitchen' },
        url: 'corentinmiserque.github.io/dark-kitchen/',
        github:"https://github.com/Corentinmiserque/dark-kitchen"
      },

      {
        title: 'SunnySide',
        text: 'work in progress.',
        tag: [ 'Html', 'Scss', 'Solo'], 
        picture: { url: "/SunnySide.png", alt: 'SunnySide' },
        url: 'https://corentinmiserque.github.io/sunnyside-project1/',
        github:"https://github.com/Corentinmiserque/sunnyside-project1"
      },

    ],
  }),

  getters: {
    allProjects() {
      return this.projects;
    },
  },


});
