<template>
  <div>
    <h1>User</h1>
    <hr>
    <p>Loaded ID: {{id}}</p>
    <b-button
      @click="goHome"
      variant="info"
    >
      Home
    </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
</style>
