<template>
  <div>
    <p>User loaded has ID: {{$route.params.id}}</p>
    <b-button
      :to="{name: 'userEdit'}"
      variant="primary"
    >
      Edit
    </b-button>
    <b-button
      @click="goBack"
      variant="info"
    >
      Back
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang="scss">
</style>
