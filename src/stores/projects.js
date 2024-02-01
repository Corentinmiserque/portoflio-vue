// src/store/projects.js

import { defineStore } from 'pinia';

export const useProjectsStore = defineStore({
  id: 'projects',
  state: () => ({
    projects: [
      {
        title: 'Project 1',
        text: 'Description of Project 1',
        tag: 'Web Development',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },
      {
        title: 'Project 1',
        text: 'Description of Project 1',
        tag: 'Web Development',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },
      {
        title: 'Project 1',
        text: 'Description of Project 1',
        tag: 'Web Development',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },
      {
        title: 'Project 1',
        text: 'Description of Project 1',
        tag: 'Web Development',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },
      {
        title: 'Project 1',
        text: 'Description of Project 1',
        tag: 'Web Development',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 1 Image' },
        github: 'https://github.com/project1',
        url: 'https://project1.com',
      },
      {
        title: 'Project 2',
        text: 'Description of Project 2',
        tag: 'Mobile App',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 2 Image' },
        github: 'https://github.com/project2',
        url: 'https://project2.com',
      },
      {
        title: 'Project 3',
        text: 'Description of Project 3',
        tag: 'Data Science',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 3 Image' },
        github: 'https://github.com/project3',
        url: 'https://project3.com',
      },
      {
        title: 'Project 4',
        text: 'Description of Project 4',
        tag: 'UI/UX Design',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 4 Image' },
        github: 'https://github.com/project4',
        url: 'https://project4.com',
      },
      {
        title: 'Project 5',
        text: 'Description of Project 5',
        tag: 'Machine Learning',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa' ,alt: 'Project 5 Image' },
        github: 'https://github.com/project5',
        url: 'https://project5.com',
      },
      {
        title: 'Project 6',
        text: 'Description of Project 6',
        tag: 'Blockchain',
        picture: { url: 'https://dummyimage.com/400x400/00FF00/aaa', alt: 'Project 6 Image' },
        github: 'https://github.com/project6',
        url: 'https://project6.com',
      },
    ],
  }),

  getters: {
    allProjects() {
      return this.projects;
    },
  },


});
