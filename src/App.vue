<template>
  <v-app>
    <v-container fluid style="z-index: 5" class="primary">
      <v-row>
        <v-col>
          <router-link to="/">
            <v-img
              src="./assets/logo-dark.svg"
              alt="Logo"
              max-width="250px"
              v-if="$vuetify.theme.isDark"
            ></v-img>
            <v-img
              src="./assets/logo.svg"
              alt="Logo"
              max-width="250px"
              v-else
            ></v-img>
          </router-link>
        </v-col>
        <v-col class="d-flex justify-end" v-if="!$vuetify.breakpoint.mobile">
          <v-btn
            :outlined="index == pages.length - 1"
            class="ml-2"
            text
            v-for="(p, index) in pages"
            :color="p.color"
            :key="p.name"
            :to="p.href"
          >
            {{ p.name }}
          </v-btn>
        </v-col>
        <v-col class="d-flex justify-end" v-else style="z-index: 999">
          <v-btn icon @click="drawer = !drawer">
            <v-icon> mdi-menu </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-navigation-drawer
      right
      v-model="drawer"
      app
      v-if="$vuetify.breakpoint.mobile"
    >
      <v-list dense>
        <v-list-item v-for="p in pages" :key="p.name">
          <v-list-item-content>
            <v-list-item-title>
              <v-btn :to="p.href" text block :color="p.color">
                {{ p.name }}
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="primary mt-n14" app>
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
export default {
  data: () => ({
    drawer: false,
    pages: [
      {
        href: "/about",
        name: "About",
        color: "accent",
      },
    ],
  }),

  metaInfo: {
    title: "Home",
    titleTemplate: "%s | Xander Vos",
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