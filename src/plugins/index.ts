/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../stores'
import router from '../router'
import FlagIcon from 'vue3-flag-icons'
import 'vue3-flag-icons/styles'
import { ZoomImg } from "vue3-zoomer";

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .component('FlagIcon', FlagIcon)
    .component('ZoomImg', ZoomImg)
}
