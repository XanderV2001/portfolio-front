<template>
  <v-carousel hide-delimiters show-arrows-on-hover id="projects">
    <v-carousel-item
      class="secondary"
      v-for="project in projects"
      :key="project.id"
    >
      <v-sheet color="secondary" height="100%">
        <v-row class="fill-height flex-column" align="center" justify="center">
          <div class="display-3 mb-10">{{ project.title }}</div>
          <p class="mb-15 text-h6">{{ project.description }}</p>
          <v-btn :href="project.url" target="_blank" outlined>
            More information
          </v-btn>
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
        title: "Voltiac Development",
        description: "Co-founded venture for software development",
        url: "https://voltiac.dev/",
      },
      {
        id: "2",
        title: "PC Parts API",
        description: "Open-Source PC Parts API built with GraphQL",
        url: "https://parts.xandervos.nl/",
      },
    ],
  }),
};
</script>

<style>
</style>