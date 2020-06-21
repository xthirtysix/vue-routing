<template>
  <div>
    <h2>Edit User{{ $route.params.id }}</h2>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
</style>
