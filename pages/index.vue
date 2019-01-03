<template>
  <div id="landing">
    <header>
      <v-layout justify-space-between="justify-space-between">
        <v-flex xs2="xs2">
          <v-img
            src="/img/icons/landing-icon-machine-vision.png"
            alt="Machine Vision"
            width="155"
            height="64"
            contain="contain"
          />
        </v-flex>
        <v-flex class="text-xs-right grey--text text--darken-2" xs4="xs4">
          <h1>Imunisasi Terpadu</h1>
        </v-flex>
      </v-layout>
    </header>
    <main>
      <v-layout>
        <v-flex xs5="xs5">
          <div class="landing__left ml-3 mr-3" style="margin-top: 14.4rem;">
            <h2 class="font-weight-light headline grey--text text--darken-2">
              <!-- eslint-disable-next-line -->
              IMUT (Imunisasi Terpadu) akan membantu anda dalam memonitoring
              pertumbuhan dan perkembangan si buah hati
            </h2>
            <v-btn
              color="blue-grey"
              dark="dark"
              depressed="depressed"
              to="/signin"
              v-text="'Sign in'"
            />
            <v-btn
              color="blue-grey"
              dark="dark"
              depressed="depressed"
              to="/register"
              v-text="'Register'"
            />
          </div>
        </v-flex>
        <v-flex xs6="xs6">
          <v-img
            src="/img/icons/landing-ilustration.png"
            alt="Machine Vision"
            width="512"
            height="426"
            contain="contain"
          />
        </v-flex>
      </v-layout>
    </main>
  </div>
</template>

<script>
export default {
  layout: "landing"
};
</script>
