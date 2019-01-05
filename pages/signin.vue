<template>
  <v-layout
    id="login"
    fill-height="fill-height"
    align-center="align-center"
    justify-center="justify-center"
  >
    <v-flex xs4="xs4">
      <v-layout class="mb-3" justify-center="justify-center">
        <v-flex xs10="xs10">
          <v-img
            src="/img/imut_logo.png"
            alt="Imunisasi Terpadu"
            height="128"
            contain="contain"
          />
        </v-flex>
      </v-layout>
      <v-card>
        <v-toolbar card="card" dark="dark" color="accent">
          <v-toolbar-title class="text-xs-center" style="width: 100%;">
            Sign In
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <form action="" @submit.prevent="onSigninButtonClicked">
            <v-container gird-list-md="" fluid="">
              <v-layout row="row" wrap="wrap">
                <v-flex xs12="xs12">
                  <v-text-field
                    v-validate="'required'"
                    v-model="username"
                    :error-messages="errors.collect('username')"
                    box="box"
                    clearable="clearable"
                    required="required"
                    label="Username"
                    type="text"
                    name="username"
                    data-vv-name="username"
                    data-vv-as="username"
                  />
                </v-flex>
                <v-flex xs12="xs12">
                  <v-text-field
                    v-validate="'required'"
                    :type="isPasswordDisplayed ? 'text' : 'password'"
                    :append-icon="appendedIcon"
                    v-model="password"
                    :error-messages="errors.collect('password')"
                    box="box"
                    clearable="clearable"
                    required="required"
                    label="Password"
                    name="password"
                    data-vv-name="password"
                    data-vv-as="Password"
                    @click:append="onAppendedIconClicked"
                  />
                </v-flex>
              </v-layout>
              <v-layout row="row" wrap="wrap">
                <v-flex xs12="xs12" sm5="sm5">
                  <v-btn
                    :disabled="isLoading || isActionButtonDisabled"
                    :loading="isLoading"
                    class="white--text"
                    color="blue-grey"
                    block="block"
                    depressed="depressed"
                    type="submit"
                    @click="onSigninButtonClicked"
                  >
                    Sign In
                  </v-btn>
                </v-flex>
                <v-spacer />
                <v-flex xs12="xs12" sm6="sm6">
                  <v-checkbox
                    v-model="isRememberMeChecked"
                    class="mt-2"
                    label="Remember me"
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "signin",
  head() {
    return {
      title: "Sign In"
    };
  },
  data() {
    return {
      isRememberMeChecked: false,
      isPasswordDisplayed: false,
      isActionButtonDisabled: true,
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["isLoading"]),
    appendedIcon() {
      return this.isPasswordDisplayed ? "mdi-eye-off" : "mdi-eye";
    }
  },
  watch: {
    errors: {
      handler({ items }) {
        if (items.length === 0) {
          this.isActionButtonDisabled = false;
        } else {
          this.isActionButtonDisabled = true;
        }
      },
      deep: true
    }
  },
  methods: {
    onAppendedIconClicked() {
      this.isPasswordDisplayed = !this.isPasswordDisplayed;
    },
    onSigninButtonClicked() {
      this.$store.dispatch("getToken", {
        username: this.username,
        password: this.password,
        isRememberMeChecked: this.isRememberMeChecked
      });
    }
  }
};
</script>
