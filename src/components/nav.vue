<template>
  <v-row>
    <v-col>
      <router-link to="/">
        <v-img
          src="../assets/logo-dark.svg"
          alt="Logo"
          max-width="250px"
          v-if="$vuetify.theme.isDark"
        ></v-img>
        <v-img
          src="../assets/logo.svg"
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
    <v-col class="d-flex justify-end" v-else>
      <v-btn icon @click="drawer = !drawer">
        <v-icon> mdi-menu </v-icon>
      </v-btn>
      <v-navigation-drawer right v-model="drawer" app>
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Nav bar",

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
};
</script>

<style>
</style>