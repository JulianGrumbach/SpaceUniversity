<template>
  <div class="courses">
    <v-card>
      <v-tabs v-model="tab">
        <v-tab
          :value="1"
        >
          {{ t('$vuetify.study.courses.myCourses') }}
        </v-tab>
        <v-tab
          :value="2"
        >
          {{ t('$vuetify.study.courses.allCourses') }}
        </v-tab>
      </v-tabs>
      <v-fab
        v-if="role.name == 'tutor'"
        icon="fa-solid fa-plus"
        absolute
        class="top-0 right-0 me-4 mt-4"
      />
      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="n in 2"
          :key="n"
          :value="n"
        >
          <v-container class="do-scroll">
            <v-text-field
              v-if="n == 2"
              label="Kurs suchen"
            />
            <v-row>
              <v-col
                v-for="course in state.events"
                :key="course.id"
                cols="6"
              >
                <v-card
                  :title="course.title"
                  :subtitle="course.description"
                  :prepend-icon="course.type == 'training' ? 'fa-solid fa-pencil' : 'fa-solid fa-book'"
                  :href="'/study/courses/' + course._id"
                >
                  <template #append>
                    <v-btn
                      icon="fa-solid fa-info"
                      variant="tonal"
                      size="x-small"
                      @click.prevent="show[course.id] = !show[course.id]"
                    />
                  </template>
                  <v-expand-transition>
                    <div v-show="show[course.id]">
                      <v-card-text v-if="course.moduleId">
                        <v-icon
                          icon="fa-solid fa-id-card"
                          class="opacity-50 me-1"
                        />
                        <b>{{ t('$vuetify.study.courses.module') }}</b><br>
                        {{ course.moduleId }}
                      </v-card-text>
                      <v-card-text v-if="course.roomId">
                        <v-icon
                          icon="fa-solid fa-map-location-dot"
                          class="opacity-50 me-1"
                        />
                        <span>
                          <b>{{ t('$vuetify.study.courses.room') }}</b><br>
                          {{ course.roomId }}
                        </span>
                      </v-card-text>
                      <v-card-text v-if="course.duration">
                        <div>
                          <v-icon
                            icon="fa-solid fa-clock"
                            class="opacity-50 me-1"
                          />
                          <div class="d-inline-block">
                            <b>{{ t('$vuetify.study.courses.duration') }}</b><br>
                            {{ course.duration }}
                          </div>
                        </div>
                      </v-card-text>
                      <v-card-text>
                        <v-icon
                          icon="fa-solid fa-calendar"
                          class="opacity-50 me-1"
                        />
                        <b>{{ t('$vuetify.study.courses.dates') }}</b>
                        <v-list slim>
                          <v-list-item
                            v-for="d in course.dates"
                            :key="d"
                            :title="date.format(d, 'keyboardDateTime')"
                            density="compact"
                            class="text-h1"
                          />
                        </v-list>
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </div>
</template>
<script setup lang="ts">
  import { useLocale } from 'vuetify'
  import { eventStore } from '@/stores/pouchDB/event-store';
  import type { Reactive } from 'vue';
  import type { Event } from '@/stores/pouchDB/event-store';
  import { useDate } from 'vuetify'
  import { usePochtaStore } from '@/stores/pochta';
  import { storeToRefs } from 'pinia'

  const store = usePochtaStore()
  const { role } = storeToRefs(store)
  const { t } = useLocale()
  const date = useDate()

  const tab = ref(null)
  const show: Reactive<Record<string, boolean>> = reactive({})
  const state: Reactive<Record<"events", (Event & { _id: string })[]>> = reactive({
      events: [],
    });

  eventStore.list().then((events) => {
    state.events = events as unknown as ((Event & { _id: string })[]);
    for (const event of state.events) {
      show[event.id] = false
    }
  })
</script>
<style scoped>
.do-scroll {
  max-height: 80vh;
  overflow-y: auto;
}
</style>

