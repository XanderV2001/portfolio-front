<template>
  <v-app>
    <v-container fluid style="z-index: 9999" class="primary">
      <nav-bar />
    </v-container>
    <v-main class="primary mt-n14">
      <router-view />
    </v-main>
    <v-footer padless color="accent">
      <v-col class="text-right" cols="12">
        <v-btn @click="changeTheme" icon>
          <v-icon color="white"> mdi-theme-light-dark </v-icon>
        </v-btn>
      </v-col>
      <v-col class="text-center mt-n15 white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Xander Vos</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "./components/nav.vue";
export default {
  components: {
    NavBar,
  },

  beforeCreate() {
    this.$vuetify.theme.dark = localStorage.getItem("theme") == "true";
  },

  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.isDark;
      localStorage.setItem("theme", this.$vuetify.theme.isDark);
    },
  },
};
</script>

<style>
</style>