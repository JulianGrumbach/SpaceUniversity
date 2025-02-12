<template>
  <v-breadcrumbs
    :items="state.items"
    class="px-1 py-0"
  />
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  //Remove later
  const state = ref({
    items: [
      { title: 'Home', disabled: false, href: '/' },
      { title: 'About', disabled: false, href: '/about' },
      { title: 'Contact', disabled: true },
    ],
  })
</script>
