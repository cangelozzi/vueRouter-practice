<template>
  <div>
       <h1>The User Page</h1>
       <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
  </div>
</template>

<script>
export default {

  methods: {
    navigateToHome() {
      this.$router.push('/');
    }

  }

};
</script>

<style>
</style>
