<template>
  <v-carousel hide-delimiters show-arrows-on-hover id="projects">
    <v-carousel-item
      class="secondary"
      v-for="project in projects"
      :key="project.id"
    >
      <v-sheet color="secondary" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">{{ project.title }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "projects",
  data: () => ({
    projects: [
      {
        id: "1",
        title: "Project 1",
      },
      {
        id: "2",
        title: "Project 2",
      },
    ],
  }),
};
</script>

<style>
</style>