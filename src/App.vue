<template>
  <div id="app">
    <app-navbar id="navbar"/>
    <b-container style="margin-bottom: auto">
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
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
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#navbar {
  margin-bottom: 2rem;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.3s ease-in-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  35% {
    transform: translateX(-5%);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
