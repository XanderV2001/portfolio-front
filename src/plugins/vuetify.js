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
        primary: '#fffcf2',
        secondary: '#ccc5b9',
        dark1: "#403d39",
        dark2: "#252422",
        accent: '#eb5e28',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: "#181A1B",
        secondary: "#ccc5b9",
        dark1: "#403d39",
        dark2: "#252422",
        accent: '#eb5e28',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    },
    dark: true
  },
});
