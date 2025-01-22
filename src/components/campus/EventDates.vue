<template>
  <div class="eventDates">
    <v-list color="secondary" dark style="padding:0px">
      <v-list-item @click="state.show = !state.show">
        <v-list-item-icon>
          <v-icon>fa-calendar-check</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title font-size="2em">
            {{ $vuetify.lang.t('$vuetify.eventDates.mySchedule') }}
          </v-list-item-title>
        </v-list-item-content>
        <v-icon class="ma-2" v-if="!state.show" v-text="'fa-angle-up'" />
        <v-icon class="ma-2" v-if="state.show" v-text="'fa-angle-down'" />
      </v-list-item>
    </v-list>
    <v-date-picker
      :events="getEvents"
      first-day-of-week="1"
      full-width
      no-title
      reactive
      show-week
      v-if="state.show"
    />
  </div>
</template>

<script>
import { reactive, watch, onMounted } from '@vue/composition-api';
import { eventStore } from '@/store/pouchDB/event-store';
import { pochtaStore } from '@/store/localStorage/pochta-store';

export default {
  name: 'EventDates',
  setup() {
    const state = reactive({
      events: [],
      show: false,
    });

    const getEvents = date => {
      return state.events
        .filter(event => event.date.includes(date))
        .map(event => event.color);
    };
    const fetchEvents = () => {
      state.events = [];
      const colors = {
        exam: 'red',
        lecture: 'orange',
        training: 'green',
      };
      pochtaStore.eventIds.map(eventId => {
        eventStore.read(eventId).then(doc => {
          if (doc.dates === undefined) return;
          doc.dates.forEach(date => {
            state.events.push({
              date: date,
              color: colors[doc.type],
            });
          });
        });
      });
    };
    onMounted(fetchEvents);
    watch(
      () => pochtaStore.eventIds,
      () => {
        fetchEvents();
      }
    );
    return {
      getEvents,
      state,
    };
  },
};
</script>
