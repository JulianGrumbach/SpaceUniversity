<template>
  <v-system-bar app dark fixed color="primary" style="height: 28px; padding: 0">
    <span class="mx-4">Vue Pochta</span>

    <v-btn text tile small to="/">{{
      $vuetify.lang.t('$vuetify.home.name')
    }}</v-btn>

    <div class="d-flex align-center">
      <span :key="group" v-for="(group, index) in groups">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              tile
              small
              style="padding-right: 0"
              v-bind="attrs"
              v-on="on"
            >
              {{ $vuetify.lang.t(groupNames[index]) }}
              <v-icon v-text="'fa-chevron-down'" />
            </v-btn>
          </template>
          <Navigation :group="group" />
        </v-menu>
      </span>
    </div>

    <v-spacer />

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text tile small v-bind="attrs" v-on="on">
          <v-icon x-small>{{ state.role.icon }}</v-icon>
          {{ state.role.name }}
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item v-for="role in roles" :key="role.name" @click="iam(role)">
          <v-list-item-icon>
            <v-icon v-text="role.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="role.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-switch v-model="$vuetify.theme.dark" color="rgb(40,40,40)"></v-switch>
    <LanguageButton />

    <!-- <v-btn text tile small @click="close">
      <v-icon x-small>fa-times</v-icon>
      Close
    </v-btn> -->
  </v-system-bar>
</template>

<script>
import routes from '@/router/routes';
import { pochtaStore } from '@/store/localStorage/pochta-store';
import Navigation from '@/components/Navigation.vue';
import LanguageButton from '@/components/LanguageButton.vue';

export default {
  name: 'SystemBar',
  components: {
    Navigation,
    LanguageButton,
  },
  data: () => ({
    groups: ['campus', 'study', 'playground', 'about'],
    groupNames: [
      '$vuetify.campus.name',
      '$vuetify.study.name',
      '$vuetify.playground.name',
      '$vuetify.about.name',
    ],
    roles: [
      {
        name: 'student',
        icon: 'fa-user-graduate',
      },
      {
        name: 'tutor',
        icon: 'fa-user-tie',
      },
    ],
    routes,
  }),
  setup() {
    const close = () => window.close();
    const iam = role => pochtaStore.iam(role);
    const state = pochtaStore.state;

    return {
      state,
      iam,
      close,
    };
  },
};
</script>
<style scoped>
.v-input--checkbox >>> label {
  color: black;
  /* background-color: orange; */
}
</style>
