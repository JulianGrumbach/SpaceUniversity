<template>
  <div class="navigation">
    <v-list
      density="compact"
      :nav="nav"
      :class="{ nav }"
    >
      <v-list-item
        v-for="item of routes[group]"
        :key="item.to"
        :to="item.to"
        link
        class="d-flex justify-left"
        :title="t(item.title)"
      >
        <template #prepend>
          <v-icon
            :icon="item.icon"
            size="default"
            class="pl-1"
          />
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>
<script setup lang="ts">
  import { useLocale } from 'vuetify'
  import routes from '@/router/routes';
  //import { routes } from 'vue-router/auto-routes'

  defineProps({
    group: {
      type: String,
      default: "",
    },
    nav: Boolean,
  })

  const { t } = useLocale()
</script>
<style>
  .nav {
    padding-top: 0;
  }
</style>
