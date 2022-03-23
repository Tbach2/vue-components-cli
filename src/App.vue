<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
    </nav>

    <div class="container-fluid mt-3">
      <!--    <img alt="Vue logo" src="./assets/logo.png">-->
      <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <LibraryList></LibraryList>
      <BagList></BagList>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LibraryList from "@/components/LibraryList";

export default {
  name: 'App',
  components: {
    LibraryList,
    // HelloWorld
  }
}
</script>

<style>

</style>
