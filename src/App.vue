<template>
    <body class="body" :class="{ 'lightmode': isLightMode, 'darkmode': !isLightMode } ">
        <div>
      <HeaderComponent @toggle-night-mode="toggleNightMode" :isLightMode="isLightMode"></HeaderComponent>
      <WorkInProgressComponent></WorkInProgressComponent>
      <HeroComponent></HeroComponent>
      <ProjectsComponent></ProjectsComponent>
      <FooterComponent></FooterComponent>
    </div>   
    </body>

  </template>
  
  <script setup>
  import HeaderComponent  from './components/HeaderComponent.vue';
  import HeroComponent from './components/HeroComponent.vue';
  import ProjectsComponent from './components/ProjectsComponent.vue'
  import FooterComponent from './components/FooterComponent.vue';
  import WorkInProgressComponent from './components/WorkInProgressComponent.vue';

  import { ref } from 'vue';
  
  const isLightMode = ref(true);
  
  const toggleNightMode = () => {
    isLightMode.value = !isLightMode.value;
  };
  </script>