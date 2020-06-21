<template>
  <div>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <br>
    <b-form-input
      v-model="text"
      placeholder="Enter user id"
      @input="isValid"
      :state="state"></b-form-input>
    <br>
    <div class="button-container">
      <b-button
        :to="link"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: false,
      text: '',
      link: {
        name: 'userEdit',
        params: {
          id: this.$route.params.id,
        },
        query: {
          locale: 'en',
          q: 100,
        },
      },
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'home' });
    },
    isValid() {
      if (this.text === this.link.params.id) {
        this.state = true;
      } else {
        this.state = false;
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'userEdit') {
      if (this.link.params.id === this.text) {
        next();
      } else {
        this.state = false;
        console.log('Please enter valid ID');
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>

<style lang="scss">
.button-container {
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
}
</style>
