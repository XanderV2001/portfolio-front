<template>
  <div>
    <landing />
    <skills />
  </div>
</template>

<script>
import landing from "@/components/home/landing";
import skills from "@/components/home/skills";
export default {
  name: "Home",
  components: {
    landing,
    skills  
  },
};
</script>

<style scoped>
</style>
