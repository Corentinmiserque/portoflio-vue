<template>
    <footer>
      <p>© {{ getCurrentYear() }} All rights reserved.</p>
    </footer>
  </template>
  
  <script setup>
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  </script>
  

  

  