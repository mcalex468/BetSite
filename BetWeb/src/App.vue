<template>
  <div>
    <Navigation />
    <main class="container">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<style src="./assets/style.css"></style>
