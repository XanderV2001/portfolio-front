<template>
  <div>
    <landing />
    <projects />
    <experience />
  </div>
</template>

<script>
import landing from "@/components/home/landing";
import projects from "@/components/home/projects";
import experience from "@/components/home/experience";
export default {
  name: "Home",
  components: {
    landing,
    projects,
    experience,
  },
};
</script>

<style scoped>
</style>
