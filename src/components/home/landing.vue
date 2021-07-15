<template>
  <v-container fluid>
    <v-container
      class="d-flex justify-center align-center"
      style="height: 100vh"
      fluid
    >
      <div>
        <h1
          class="
            text-h4 text-sm-h2 text-md-h1 text-lg-h1 text-xl-h1 text-center
            mb-5
          "
        >
          Who am I?
        </h1>
        <type-writer
          :textArray="buzzWords"
          class="
            text-h4 text-sm-h2 text-md-h1 text-lg-h1 text-xl-h1 text-center
          "
        />
      </div>
    </v-container>

    <div style="position: absolute; top: 80vh; left: 0px; width: 100vw">
      <div class="d-flex justify-center">
        <v-btn
          outlined
          rounded
          color="accent"
          v-scroll-to="{
            el: '#projects',
            duration: 500,
            easing: 'ease-in-out',
          }"
        >
          Projects
          <v-icon class="ml-3">mdi-arrow-down</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import TypeWriter from "@/components/TypeWriter.vue";
export default {
  name: "landing",

  components: {
    TypeWriter,
  },

  data: () => ({
    buzzWords: ["Xander Vos", "Software Engineer", "Computer Enthousiast"],
  }),
};
</script>