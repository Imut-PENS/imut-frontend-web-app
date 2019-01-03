<template>
  <v-app>
    <v-content>
      <v-container fill-height="fill-height" fluid="fluid">
        <nuxt />
      </v-container>
    </v-content>
    <app-notification />
  </v-app>
</template>

<script>
import AppNotification from "~/components/AppNotification";

export default {
  components: {
    AppNotification
  },
  created() {
    this.$store.dispatch("autoSignIn");
  }
};
</script>
