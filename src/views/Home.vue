<template>
  <div>
    <landing />
    <projects />
  </div>
</template>

<script>
import landing from "@/components/home/landing";
import projects from "@/components/home/projects";
export default {
  name: "Home",
  components: {
    landing,
    projects,
  },
};
</script>

<style scoped>
</style>
