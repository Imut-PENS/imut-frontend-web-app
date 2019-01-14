<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>

export default {
  created() {
    this.$store.dispatch("autoSignIn");
  }
};
</script>
