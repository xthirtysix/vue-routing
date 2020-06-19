<template>
  <div>
    <p>User loaded has ID: {{$route.params.id}}</p>
    <b-button @click="goBack" variant="info">Back</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/users');
    },
  },
};
</script>

<style lang="scss">
</style>
