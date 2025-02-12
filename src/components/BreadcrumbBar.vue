<template>
  <v-breadcrumbs
    :items="state.items"
    class="px-1 py-0"
  />
</template>
<script setup lang="ts">
  import { reactive } from 'vue';

  //Remove later
  const state = reactive({
    items: [
      { title: 'Home', disabled: false, href: '/' }
    ],
  })

  //Watch route changes
  const route = useRoute();
  route.path.split('/').forEach((item, index) => {
      if (index === 0) return;
      const newTitle = item.charAt(0).toUpperCase() + item.slice(1);
      state.items[index + 1] = { title: newTitle, disabled: false, href: `${item}` };
    });
  watch(() => route.path, () => {
    console.log('Route changed:', route.path);
    //Clear all items except the first one
    state.items.splice(1);
    route.path.split('/').forEach((item, index) => {
      if (index === 0) return;
      const newTitle = item.charAt(0).toUpperCase() + item.slice(1);
      state.items[index + 1] = { title: newTitle, disabled: false, href: `${item}` };
    });
  });
</script>
