import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const state = () => ({
  notification: {
    text: null,
    timeout: 6000,
    color: null,
    multiline: false
  },
  isNotificationDisplayed: false
});

export default {
  state,
  getters,
  mutations,
  actions
};
