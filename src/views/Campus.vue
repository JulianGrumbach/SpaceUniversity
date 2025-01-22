<template>
  <div class="campus">
    <v-container>
      <router-view />
      <v-navigation-drawer app right width="380px" v-model="state.opened">
        <router-view name="sidebar" />
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
import { reactive, watch } from '@vue/composition-api';

export default {
  name: 'Campus',
  setup(props, { root }) {
    const state = reactive({
      opened: root.$route.meta.opened == true,
      redirect: root.$route.meta.redirect,
    });
    watch(
      () => root.$route,
      () => {
        state.opened = root.$route.meta.opened == true;
        state.redirect = root.$route.meta.redirect;
      }
    );
    return {
      state,
    };
  },
};
</script>
