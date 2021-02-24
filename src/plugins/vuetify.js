import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#fff',
        secondary: '#C2E6B3',
        dark1: "#403d39",
        dark2: "#252422",
        accent: '#50C878',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: "#181A1B",
        secondary: "#313638",
        dark1: "#403d39",
        dark2: "#252422",
        accent: '#50C878',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    },
    dark: true,
  },
});
