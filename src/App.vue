<template>
  <v-app>
    <SystemBar />

    <v-navigation-drawer
      v-model="drawer"
      :rail="mini"
      rail-width="62"
      permanent
    >
      <v-list-item>
        <template
          v-if="!mini"
          #prepend
        >
          <v-icon icon="fa-solid fa-archway" />
        </template>

        <!--d-flex align-content-center flex-wrap-->
        <div
          class="d-flex align-items-center"
        >
          <v-list-item-title
            v-if="!mini"
            class="text-h6 align-self-center"
            style="font-weight: 500;"
          >
            <router-link
              class="sidebar-title"
              to="/"
            >
              Vue Pochta
            </router-link>
          </v-list-item-title>
          <v-btn
            :icon="mini ? 'fa-solid fa-angle-right' : 'fa-solid fa-angle-left'"
            variant="text"
            class="opacity-60"
            @click="mini = !mini"
          />
        </div>
      </v-list-item>

      <span
        v-for="(group, index) of groups"
        :key="group"
        style="margin-top: 56px"
      >
        <v-divider color="black" />
        <v-list-subheader
          :class="mini ? 'mini justify-center' : 'pl-4'"
          class="nav-subheader overflow-visible"
          style="padding: 0"
          inset
        >
          {{ shorten(t(groupNames[index])).toUpperCase() }}
        </v-list-subheader>
        <Navigation
          :group="group"
          :nav="true"
        />
      </span>

      <v-spacer />

      <template #append>
        <span
          v-show="!mini"
          vertical-align="bottom"
        >
          <v-card tile>
            <EventDates />
          </v-card>
        </span>
      </template>
    </v-navigation-drawer>

    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useLocale } from 'vuetify'
  import stores from '@/stores/pouchDB/stores';


  const groups = ['campus', 'study', 'about']
  const groupNames = [
      '$vuetify.campus.name',
      '$vuetify.study.name',
      '$vuetify.about.name',
    ]

  const mini = ref(true)
  const drawer = ref(true)

  const { t } = useLocale()

  function shorten(str: string): string {
    return str.length > 6 && mini.value ? str.slice(0, 5).concat('…') : str
  }

  stores.init();
</script>
<style>
  html {
    overflow: hidden;
  }

  .nav-subheader {
    font-weight: 700 !important;
    height: 24px !important;
    min-height: 24px !important;
    letter-spacing: 1.5px;
  }

  .mini {
    font-size: 8px !important;
  }

  .v-list-subheader__text {
    overflow: inherit;
  }
</style>

