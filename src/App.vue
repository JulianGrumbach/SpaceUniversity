<template>
  <v-app>
    <SystemBar />

    <v-navigation-drawer
      :mini-variant="mini"
      app
      mini-variant-width="62"
      permament
      v-model="drawer"
    >
      <v-list-item>
        <template v-if="!mini">
          <v-list-item-icon>
            <v-icon>fa-archway</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="title">
              <router-link
                class="sidebar-title"
                style="color: inherit; text-decoration: none"
                to="/"
              >
                Vue Pochta
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon v-text="mini ? 'fa-angle-right' : 'fa-angle-left'" />
        </v-btn>
      </v-list-item>

      <span
        :key="group"
        style="margin-top: 56px"
        v-for="(group, index) of groups"
      >
        <v-divider />
        <v-subheader
          :class="{ mini }"
          class="nav-subheader"
          v-text="shorten($vuetify.lang.t(groupNames[index]).toUpperCase())"
        />
        <Navigation :group="group" :nav="true" />
      </span>

      <v-spacer />

      <template v-slot:append>
        <span v-show="!mini" vertical-align="bottom">
          <v-card>
            <EventDates />
          </v-card>
        </span>
      </template>
    </v-navigation-drawer>

    <v-main>
      <BreadcrumbBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { reactive, ref, watch } from '@vue/composition-api';
import BreadcrumbBar from '@/components/BreadcrumbBar.vue';
import Navigation from '@/components/Navigation.vue';
import SystemBar from '@/components/SystemBar.vue';
import EventDates from '@/components/campus/EventDates.vue';

import stores from '@/store/pouchDB/stores';

export default Vue.extend({
  name: 'App',
  components: {
    BreadcrumbBar,
    EventDates,
    Navigation,
    SystemBar,
  },
  beforeCreate() {
    stores.init();
  },
  data: () => ({
    groups: ['campus', 'study', 'playground', 'about'],
    groupNames: [
      '$vuetify.campus.name',
      '$vuetify.study.name',
      '$vuetify.playground.name',
      '$vuetify.about.name',
    ],
  }),
  setup(props) {
    const drawer = true;
    const mini = ref(true);
    function shorten(inputString: string): string {
      return inputString.length > 5 && mini.value
        ? inputString.slice(0, 4).concat('...')
        : inputString;
    }
    return {
      drawer,
      mini,
      shorten,
    };
  },
});
</script>

<style>
html {
  overflow: hidden;
}

.nav-subheader {
  font-weight: 700 !important;
  height: 24px !important;
  letter-spacing: 1.5px;
}

.mini {
  font-size: 8px !important;
}

.sidebar-title {
  background-color: #f5f5f5;
}

.sidebar-title:not(:hover) {
  background-color: #ffffff;
}
</style>
