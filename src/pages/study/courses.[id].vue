<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn
          color="primary"
          class="mb-4"
          @click="goBack"
        >
          Zurück
        </v-btn>
        <v-card
          :title="course.title + ' (' + course.id + ')'"
          :subtitle="course.description"
        >
          <v-fab
            v-if="myCourse"
            icon="fa-solid fa-times-circle"
            color="red"
            absolute
            class="top-0 right-0 me-4"
            @click="myCourse = !myCourse"
          />
          <v-fab
            v-if="!myCourse"
            icon="fa-solid fa-check-circle"
            color="primary"
            absolute
            class="top-0 right-0 me-4"
            @click="myCourse = !myCourse"
          />
          <v-card-text>
            <v-list>
              <v-list-item
                :title="t('$vuetify.study.courses.name')"
                :subtitle="course.type == 'training' ? t('$vuetify.study.courses.type.training') : t('$vuetify.study.courses.type.lecture')"
              />
              <v-list-item
                v-if="course.duration"
                :title="t('$vuetify.study.courses.duration')"
                :subtitle="course.duration"
              />
              <v-list-item
                v-if="course.dates"
                :title="t('$vuetify.study.courses.dates')"
                :subtitle="course.dates.join(', ')"
              />
              <v-list-item
                v-if="course.attendeeIds"
                :title="t('$vuetify.study.courses.attendees')"
                :subtitle="course.attendeeIds.join(', ')"
              />
              <v-list-item
                v-if="course.coordinatorIds"
                :title="t('$vuetify.study.courses.coordinators')"
                :subtitle="course.coordinatorIds.join(', ')"
              />
              <v-list-item
                v-if="course.roomId"
                :title="t('$vuetify.study.courses.room')"
                :subtitle="course.roomId"
              />
              <v-list-item
                v-if="course.moduleId"
                :title="t('$vuetify.study.courses.module')"
                :subtitle="course.moduleId"
              />
              <v-list-item
                v-if="course.public"
                :title="t('$vuetify.study.courses.public')"
                :subtitle="course.public ? t('$vuetify.study.courses.yes') : t('$vuetify.study.courses.no')"
              />
              <v-list-item
                v-if="course.deleted"
                :title="t('$vuetify.study.courses.deleted')"
                :subtitle="course.deleted ? t('$vuetify.study.courses.yes') : t('$vuetify.study.courses.no')"
              />
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import type { Event } from '@/stores/pouchDB/event-store';
  import { eventStore } from '@/stores/pouchDB/event-store';
  import type { Ref } from 'vue';
  import { useLocale } from 'vuetify';
  const { t } = useLocale();
  const myCourse = ref(false);

  const route = useRoute();
  const router = useRouter();
  type TRouteParams = {
    id: string;
  };
  const routeParams = route.params as TRouteParams;
  const courseId = routeParams.id;

  const course: Ref<Event> = ref({} as Event);

  eventStore.read(courseId).then((c) => {
    course.value = c as unknown as Event;
  }).catch((error) => {
    console.error('Error requesting course from db:', error);
  });

  const goBack = () => {
    router.push('/study/courses');
  };
</script>
