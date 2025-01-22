<template>
  <v-breadcrumbs :items="state.items" class="px-1 py-0"></v-breadcrumbs>
</template>

<script>
import { reactive, watch } from '@vue/composition-api';

export default {
  name: 'BreadcrumbBar',
  setup(props, { root }) {
    const state = reactive({
      items: root.$route.meta.breadcrumbs,
    });
    watch(
      () => root.$route,
      val => {
        state.items = val.meta.breadcrumbs;
      }
    );
    return {
      state,
    };
  },
};
</script>
