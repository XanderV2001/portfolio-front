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
    buzzWords: ["Xander Vos", "Software Engineer", "Computer Enthousiast", ".NET Developer"],
  }),
};
</script>