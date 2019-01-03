<template>
  <v-snackbar
    v-model="isNotificationDisplayed"
    :color="notification.color"
    :timeout="notification.timeout"
    :multi-line="notification.multiline"
    top=""
  >
    <span v-html="notification.text" />
    <v-btn dark flat @click="isNotificationDisplayed = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import types from "~/vuex/mutation-types";

export default {
  computed: {
    isNotificationDisplayed: {
      get() {
        return this.$store.state.isNotificationDisplayed;
      },
      set(value) {
        this.$store.commit(types.SET_NOTIFICATION_DISPLAYED, value);
      }
    },
    notification: {
      get() {
        return this.$store.state.notification;
      },
      set({ text, timeout, color }) {
        this.$store.commit(types.SET_NOTIFICATION, { text, timeout, color });
      }
    }
  },
  watch: {
    isNotificationDisplayed(value) {
      if (!value) {
        this.$store.commit(types.SET_NOTIFICATION, { text: null });
      }
    }
  }
};
</script>
