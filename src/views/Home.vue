<template>
  <div>
    <landing />
    <v-carousel
      hide-delimiter-background
      hide-delimiters
      show-arrows-on-hover
      id="projects"
    >
      <v-carousel-item>
        <v-sheet
          color="secondary"
          height="100%"
          :light="!$vuetify.theme.isDark"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Project 1</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet
          color="secondary"
          height="100%"
          :light="!$vuetify.theme.isDark"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Project 2</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet
          color="secondary"
          height="100%"
          :light="!$vuetify.theme.isDark"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Project 3</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet
          color="secondary"
          height="100%"
          :light="!$vuetify.theme.isDark"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Project 4</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet
          color="secondary"
          height="100%"
          :light="!$vuetify.theme.isDark"
        >
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Project 5</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <!-- <v-container>
      <h1>About me</h1>
      <p>
        Duis veniam culpa voluptate laboris nostrud. Amet elit Lorem labore
        occaecat voluptate incididunt enim ullamco elit reprehenderit et duis
        eiusmod. Cupidatat ipsum eiusmod voluptate est cillum ex labore
        exercitation. Exercitation cupidatat sint Lorem commodo dolor occaecat
        proident dolore quis et amet excepteur duis voluptate. Culpa officia id
        cupidatat est est deserunt cupidatat commodo enim duis aute enim. Non
        eiusmod ex incididunt excepteur enim aliqua. Nostrud do nisi aliqua
        eiusmod quis adipisicing anim do amet amet pariatur elit. Incididunt
        officia deserunt esse sunt nulla. Nostrud nostrud dolor qui veniam
        labore nostrud velit ipsum enim nisi adipisicing voluptate eu commodo.
        Velit elit mollit cupidatat quis adipisicing adipisicing fugiat laborum
        excepteur cillum velit fugiat consequat. Eiusmod in veniam commodo esse
        velit sunt officia dolore eiusmod deserunt in laboris. Adipisicing
        ullamco ipsum voluptate quis qui eu voluptate cillum. Veniam eu duis
        ullamco aliqua voluptate consequat ullamco aliqua labore. Proident eu
        excepteur eiusmod labore adipisicing cillum ad eu magna eu excepteur.
      </p>
    </v-container> -->
  </div>
</template>

<script>
import landing from "../components/landing";
export default {
  name: "Home",
  components: {
    landing,
  },
};
</script>

<style scoped>
</style>
