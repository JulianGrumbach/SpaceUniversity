<template>
  <div class="eventDates bg-grey-darken-2">
    <v-list
      color="secondary"
      tile
      class="py-0"
    >
      <v-list-item
        :title="t('$vuetify.eventDates.mySchedule')"
        prepend-icon="fa-solid fa-calendar-check"
        class="py-2"
        @click="state.show = !state.show"
      >
        <template #append>
          <v-icon
            v-if="!state.show"
            class="ma-2"
            icon="fa-solid fa-angle-up"
          />

          <v-icon
            v-if="state.show"
            class="ma-2"
            icon="fa-solid fa-angle-down"
          />
        </template>
      </v-list-item>
    </v-list>
    <v-date-picker
      v-if="state.show"
      first-day-of-week="1"
      color="primary"
      hide-header
      tile
    />
  </div>
</template>

<script setup lang="ts">
  import { reactive, onMounted } from 'vue';
  //import { eventStore } from '@/stores/pouchDB/event-store';
  //import { usePochtaStore } from '@/stores/pochta';
  import { useLocale } from 'vuetify';

  const { t } = useLocale()

  const state = reactive({
    events: [],
    show: false,
  })

  /*
  function getEvents(date: string) {
    return state.events
      .filter(event => event.date.includes(date))
      .map(event => event.color);
  }
  */

  function fetchEvents() {

  }

  onMounted(() => {
    fetchEvents()
  })
</script>
