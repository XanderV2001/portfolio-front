<template>
  <v-container>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            {{ year.title }}
          </h2>
          <h4 class="text--secondary">{{ year.location }}</h4>
          <h4 class="text--secondary">{{ year.date }}</h4>
          <div class="mt-2">
            {{ year.description }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "accent",
        date: "2020",
        title: "Climate monitoring software",
        location: "Fontys University of Applied Sciences",
        description:
          "Together with a project group we made a climate monitoring dashboard. It ingested data from their sensors via MQTT into a time series database we used to display and predict the temperature in an office.",
      },
      {
        color: "accent",
        date: "2020",
        title: "Recieved Propedeuse",
        location: "Fontys University of Applied Sciences",
        description: "I successfully completed my first year of college.",
      },
      {
        color: "accent",
        date: "2020",
        title: "Planner application",
        location: "Fontys University of Applied Sciences",
        description:
          "Together with a project group we made a planner application per request of a company. We were chosen as best execution of the project of our year.",
      },
      {
        color: "accent",
        date: "2019",
        title: "Started studying Software Engineering",
        location: "Fontys University of Applied Sciences",
        description:
          "In 2019, I started studying software engineering at Fontys Eindhoven.",
      },
    ],
  }),
};
</script>

<style>
</style>