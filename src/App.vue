<template>
  <v-app>
    <v-container fluid> <nav-bar /> </v-container>
    <v-container
      class="mt-n15 d-flex justify-center align-center"
      style="height: 100vh"
      fluid
    >
      <type-writer
        :textArray="buzzWords"
        class="text-h4 text-sm-h2 text-md-h1 text-lg-h1 text-xl-h1 text-center"
      />
    </v-container>
    <v-footer padless color="dark2">
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
import TypeWriter from "./components/TypeWriter.vue";
import NavBar from "./components/nav.vue";
export default {
  components: {
    TypeWriter,
    NavBar,
  },

  beforeCreate() {
    this.$vuetify.theme.isDark = localStorage.getItem("theme") == "true";
  },

  data: () => ({
    buzzWords: [
      "Xander Vos",
      "Software Engineer",
      "Cyber Security Specialist",
      "Computer Enthousiast",
    ],
  }),

  methods: {
    changeTheme() {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark;
      localStorage.setItem("theme", this.$vuetify.theme.isDark);
    },
  },
};
</script>