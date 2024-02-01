// src/store/projects.js

import { defineStore } from 'pinia';

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [
      {
        title: 'Courir',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sapien vel libero tincidunt, non vestibulum dui fermentum. Curabitur et hendrerit libero. Praesent venenatis dui nec purus malesuada, vel venenatis mi varius. Nullam a lectus id arcu facilisis tristique. Aenean vel tortor at mauris convallis hendrerit in eget nulla.',
        tag: ['PWA', 'VUE', 'BULMA', 'OFFLINE'], // Utilisez des crochets pour définir un tableau
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },
      {
        title: 'Courir',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sapien vel libero tincidunt, non vestibulum dui fermentum. Curabitur et hendrerit libero. Praesent venenatis dui nec purus malesuada, vel venenatis mi varius. Nullam a lectus id arcu facilisis tristique. Aenean vel tortor at mauris convallis hendrerit in eget nulla.',
        tag: ['PWA', 'VUE', 'BULMA', 'OFFLINE'], // Utilisez des crochets pour définir un tableau
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },
      {
        title: 'Courir',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sapien vel libero tincidunt, non vestibulum dui fermentum. Curabitur et hendrerit libero. Praesent venenatis dui nec purus malesuada, vel venenatis mi varius. Nullam a lectus id arcu facilisis tristique. Aenean vel tortor at mauris convallis hendrerit in eget nulla.',
        tag: ['PWA', 'VUE', 'BULMA', 'OFFLINE'], // Utilisez des crochets pour définir un tableau
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },
      {
        title: 'Courir',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sapien vel libero tincidunt, non vestibulum dui fermentum. Curabitur et hendrerit libero. Praesent venenatis dui nec purus malesuada, vel venenatis mi varius. Nullam a lectus id arcu facilisis tristique. Aenean vel tortor at mauris convallis hendrerit in eget nulla.',
        tag: ['PWA', 'VUE', 'BULMA', 'OFFLINE'], // Utilisez des crochets pour définir un tableau
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },
      {
        title: 'Courir',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sapien vel libero tincidunt, non vestibulum dui fermentum. Curabitur et hendrerit libero. Praesent venenatis dui nec purus malesuada, vel venenatis mi varius. Nullam a lectus id arcu facilisis tristique. Aenean vel tortor at mauris convallis hendrerit in eget nulla.',
        tag: ['PWA', 'VUE', 'BULMA', 'OFFLINE'], // Utilisez des crochets pour définir un tableau
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },

    ],
  }),

  getters: {
    allProjects() {
      return this.projects;
    },
  },


});
