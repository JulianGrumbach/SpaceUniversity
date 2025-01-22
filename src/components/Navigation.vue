<template>
  <div class="navigation">
    <v-list dense :nav="nav" :class="{ nav }">
      <v-list-item
        :to="item.to"
        :key="item.to"
        link
        v-for="item in routes[group]"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="$vuetify.lang.t(item.title)" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import routes from '@/router/routes';

export default {
  name: 'Navigation',
  props: {
    group: String,
    nav: Boolean,
  },
  data: () => ({ routes }),
};
</script>

<style>
.nav {
  padding-top: 0;
}
</style>
