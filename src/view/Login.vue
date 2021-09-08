<template>
  <form>
    <input type="text" />
    <input type="password" />
    <router-link to="/" @click="login">Envoyer</router-link>
  </form>
</template>
<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    },
  },
};
</script>
