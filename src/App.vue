<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-img src="./assets/logo.svg" alt="Logo" max-width="250px"></v-img>
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
          <v-btn icon @click="drawer = !drawer"
            ><v-icon>mdi-menu</v-icon></v-btn
          >
          <v-navigation-drawer absolute right v-model="drawer">
            <v-list dense>
              <v-list-item v-for="p in pages" :key="p.name">
                <!-- <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon> -->

                <v-list-item-content>
                  <v-list-item-title>
                    <v-btn :to="p.href" text block>
                      {{ p.name }}
                    </v-btn>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
      </v-row>
    </v-container>
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
      <v-col class="text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Xander Vos</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import TypeWriter from "./components/TypeWriter.vue";
export default {
  components: {
    TypeWriter,
  },

  data: () => ({
    drawer: false,
    pages: [
      {
        href: "/about",
        name: "About",
        color: "accent",
      },
    ],
    buzzWords: [
      "Software Engineer",
      "Cyber Security Specialist",
      "Computer Enthousiast",
    ],
  }),
};
</script>