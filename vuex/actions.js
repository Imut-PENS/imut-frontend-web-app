import lscache from "lscache";
import types from "./mutation-types";

export default {
  setNotification({ commit }, { text, timeout, color, multiline }) {
    commit(types.SET_NOTIFICATION_DISPLAYED, true);
    commit(types.SET_NOTIFICATION, {
      text,
      timeout,
      color,
      multiline
    });
  },
  autoSignIn({ commit, dispatch }) {
    const token = lscache.get("token");
    if (token) {
      commit(types.SET_TOKEN, token);
      dispatch("getSims", token);
    }
  }
};
