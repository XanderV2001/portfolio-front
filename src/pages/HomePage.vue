<template>

  <section id="landing" class="relative w-screen h-screen-navbar mb-2">

    <MovingDots :theme="theme" class="absolute top-0 left-0" />

    <banner class="absolute top-0 left-0" />

  </section>

  <section id="projects">

    <projects />

  </section>

</template>

<script>
import { defineComponent } from "vue";
import MovingDots from "../components/layout/home/movingDots.vue"

export default defineComponent({
  components: {
    MovingDots
  },
  props: {
    theme: String
  },
  setup() {
  }
});
</script>