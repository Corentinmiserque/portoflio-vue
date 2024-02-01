<template>
  <section class="project">
    <header>
      <h2 class="title">PROJECTS <span class="dot"></span></h2>
    <form @submit.prevent="handleFilter">
      <label class="filter-label" for="tagFilter">Filtrer by:</label>
      <select v-model="selectedTag" id="tagFilter" class="filter-select" @change="handleFilter">
        <option value="">all</option>
        <option v-for="tag in availableTags" :key="tag" :value="tag">{{ tag }}</option>
      </select>
    </form>
    </header>


    <div class="project__grid">
      <div v-for="project in visibleProjects" :key="project.title" class="project__card" @click="showProjectDetails(project)">
        <h3 class="project__card__title card-title">{{ project.title }}</h3>
        <img :src="project.picture.url" :alt="project.picture.alt" class="project__card__image" />
      </div>
    </div>

    <div v-if="selectedProject" class="project__details">
      <div class="test">

      <picture>
        <img :src="selectedProject.picture.url" :alt="selectedProject.picture.alt" class="project__details__image" />
      </picture>
    
<div class="project__details__container">
      <button @click="closeProjectDetails" class="close-button">
        <span class="line"></span>
        <span class="line"></span>
      </button>
      
      <div class="project__details__tags">
    <!-- Utilisez v-for pour parcourir les tags -->
    <span v-for="tag in selectedProject.tag" :key="tag" class="project__details__tag">{{ tag }}</span>
  </div>
      <h3 class="project__details__title card-title">{{ selectedProject.title }}</h3>
      <p class="project__details__text">{{ selectedProject.text }}</p>
      <div class="project__details__links">
        <a :href="selectedProject.github" class="project__details__links__link">GITHUB  <span class="dot"></span></a>
      <a :href="selectedProject.url" class="project__details__links__link">VISIT SITE   <span class="dot"></span></a>

      </div>
    </div>
    </div>
    </div>

    <button v-show="showLoadMoreButton" @click="loadMoreProjects" class="load-more-button">Load more projects <svg width="56" height="32" viewBox="0 0 56 32"  xmlns="http://www.w3.org/2000/svg">
<path d="M54.8889 17.4427C55.4343 17.3505 55.8014 16.835 55.7089 16.2913C55.6165 15.7476 55.0995 15.3816 54.5541 15.4738L54.8889 17.4427ZM40.578 31.8496L41.3375 29.3488L39.4204 28.7701L38.6609 31.2709L40.578 31.8496ZM41.3375 29.3488C43.2236 23.1386 48.4721 18.5272 54.8889 17.4427L54.5541 15.4738C47.3881 16.685 41.5267 21.8348 39.4204 28.7701L41.3375 29.3488Z" />
<path d="M54.8889 15.1179C55.4343 15.2101 55.8014 15.7255 55.7089 16.2692C55.6165 16.8129 55.0995 17.1789 54.5541 17.0868L54.8889 15.1179ZM40.578 0.710952L41.3375 3.21177L39.4204 3.79045L38.6609 1.28963L40.578 0.710952ZM41.3375 3.21177C43.2236 9.42196 48.4721 14.0333 54.8889 15.1179L54.5541 17.0868C47.3881 15.8755 41.5267 10.7258 39.4204 3.79045L41.3375 3.21177Z"/>
<rect y="16" width="52" height="2" />
</svg>
</button>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProjectsStore } from '@/stores/projects';

// Initialisation du store de projets
const projectsStore = useProjectsStore();

// Récupération de tous les projets
const allProjects = computed(() => projectsStore.allProjects);

// Proj@/stores/projectvisibles dans la grille
const visibleProjects = ref(allProjects.value.slice(0, 4));

// Projet actuellement sélectionné pour afficher les détails
const selectedProject = ref(null);

// Tag sélectionné pour le filtre
const selectedTag = ref('');

// Liste des tags disponibles
const availableTags = computed(() => {
  const tagsSet = new Set(allProjects.value.map(project => project.tag));
  return [''].concat(Array.from(tagsSet)); // Inclure une option vide pour "Tous"
});

// Total des projets visibles (prend en compte le filtre)
const totalVisibleProjects = ref(allProjects.value.length);

// Fonction pour charger plus de projets
const loadMoreProjects = () => {
  const currentLength = visibleProjects.value.length;
  let newProjects;

  // Logique de chargement en fonction du tag sélectionné ou non
  if (selectedTag.value === "") {
    newProjects = allProjects.value.slice(currentLength, currentLength + 4);
  } else {
    const filteredProjects = allProjects.value.filter(project => project.tag === selectedTag.value);
    newProjects = filteredProjects.slice(currentLength, currentLength + 4);
  }

  visibleProjects.value = [...visibleProjects.value, ...newProjects];
};

const showProjectDetails = (project) => {
  selectedProject.value = project;
  document.body.classList.add('is-modal-open'); // Ajoute la classe au body
};

const closeProjectDetails = () => {
  selectedProject.value = null;
  document.body.classList.remove('is-modal-open'); // Retire la classe du body
};

// Fonction pour gérer le filtre par tag
const handleFilter = () => {
  if (selectedTag.value === "") {
    visibleProjects.value = allProjects.value.slice(0, 4);
    totalVisibleProjects.value = allProjects.value.length;
  } else {
    const filteredProjects = allProjects.value.filter(project => project.tag === selectedTag.value);
    visibleProjects.value = filteredProjects.slice(0, 4);
    totalVisibleProjects.value = filteredProjects.length;
  }

  // Réinitialiser les détails du projet
  selectedProject.value = null;
};

// Calcul de l'affichage du bouton "Charger plus de projets"
const showLoadMoreButton = computed(() => {
  const remainingProjects = selectedTag.value
    ? allProjects.value.filter(project => project.tag === selectedTag.value).length - visibleProjects.value.length
    : allProjects.value.length - visibleProjects.value.length;

  return remainingProjects > 0;
});



</script>

