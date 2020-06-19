<template>
  <div id="app">
    <app-navbar id="navbar"/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    appNavbar: Navbar,
  },
};
</script>

<style lang="scss">
@import './scss/style.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#navbar {
  margin-bottom: 2rem;
}
</style>
