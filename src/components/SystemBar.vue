<template>
  <v-system-bar
    color="primary"
    class="position-fixed"
    style="height: 28px;"
  >
    <span class="mx-4">
      Vue Pochta
    </span>

    <v-btn
      variant="text"
      tile
      size="small"
      to="/"
    >
      {{ t('$vuetify.home.name') }}
    </v-btn>

    <div class="d-flex align-center">
      <span
        v-for="(group, index) of groups"
        :key="group"
      >
        <v-menu location="bottom">
          <template #activator="{ props }">
            <v-btn
              variant="text"
              tile
              size="small"
              v-bind="props"
              append-icon="fa-solid fa-chevron-down"
              :text="t(groupNames[index])"
            />
          </template>
          <Navigation
            :group="group"
            class="elevation-8"
          />
        </v-menu>
      </span>
    </div>

    <v-spacer />

    <v-menu location="bottom">
      <template #activator="{ props }">
        <v-btn
          variant="text"
          tile
          size="small"
          v-bind="props"
        >
          <v-icon
            size="small"
            :icon="role.icon"
          />
          {{ role.name }}
        </v-btn>
      </template>
      <v-list density="compact">
        <v-list-item
          v-for="r in roles"
          :key="r.name"
          :prepend-icon="r.icon"
          @click="iam(r)"
        >
          <v-list-item-title>
            {{ r.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ThemeSwitch />
    <LanguageButton />
  </v-system-bar>
</template>
<script setup lang="ts">
  import { useLocale } from 'vuetify'
  import LanguageButton from './LanguageButton.vue'
  import { usePochtaStore } from '@/stores/pochta';
  import type { Role } from '@/classes/types'
  import { storeToRefs } from 'pinia'

  const store = usePochtaStore()
  const { iam } = store
  const { role } = storeToRefs(store)

  const { t } = useLocale()

  const groups: string[] = ['campus', 'study', 'about']
  const groupNames: string[] = [
        '$vuetify.campus.name',
        '$vuetify.study.name',
        '$vuetify.about.name',
      ]
  const roles: Role[] = [
    {
      name: 'student',
      icon: 'fa-solid fa-user-graduate',
    },
    {
      name: 'tutor',
      icon: 'fa-solid fa-user-tie',
    },
  ]
</script>
<style>
  .vinput--checkbox {
    color: black;
  }
</style>
