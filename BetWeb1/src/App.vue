<template>
  <div>
    <Navigation />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<style>
main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>
