<!-- layouts/default.vue -->

<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  html {
    font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  }
</style>