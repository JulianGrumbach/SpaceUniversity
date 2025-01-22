<template>
  <div class="courses">
    <v-tabs>
      <v-tab href="#my-courses">{{
        $vuetify.lang.t('$vuetify.study.courses.myCourses')
      }}</v-tab>
      <v-tab href="#all-courses">{{
        $vuetify.lang.t('$vuetify.study.courses.allCourses')
      }}</v-tab>

      <v-tab-item id="my-courses">
        <div class="d-flex flex-wrap">
          <v-item-group>
            <v-item v-for="course in courses" :key="course.id">
              <v-item-title>{{ course.title }}</v-item-title>
              <v-item-subtitle>{{ course.subtitle }}</v-item-subtitle>
              <v-item-actions>
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-item-actions>
            </v-item>
          </v-item-group>
        </div>
      </v-tab-item>

      <v-tab-item id="all-courses">
        <div class="d-flex flex-wrap">
          <Course />
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import Course from '@/components/study/Course.vue';
export default {
  name: 'Courses',
  components: {
    Course,
  },
};
</script>
