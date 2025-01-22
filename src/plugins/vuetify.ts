import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

//import de from 'vuetify/src/locale/de';
import de from './de';
import en from './en';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  lang: {
    locales: { de, en },
    current: 'de',
  },
});
