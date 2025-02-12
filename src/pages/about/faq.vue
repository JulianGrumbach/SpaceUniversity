<template>
  <div>
    <v-container style="padding-bottom: 10px;">
      <v-row>
        <v-col
          cols="12"
          class="d-flex justify-end"
        >
          <v-text-field
            v-model="search"
            append-inner-icon="fa-solid fa-magnifying-glass"
            :placeholder="t('$vuetify.aboutFAQ.search')"
            single-line
            variant="underlined"
            color="primary"
            hide-details
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container style="height: calc(100vh - 160px); overflow-y: auto; padding-bottom: 10px;">
      <v-row>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.q1') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a1') }}</p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.q2') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a2') }}</p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.q3') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a3') }}</p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.q4') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a4') }}</p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.q5') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a5') }}</p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.q6') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a6') }}</p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.q7') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a7') }}</p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.q8') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a8') }}</p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.q9') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a9') }}</p>
        </v-col>
        <v-col cols="12">
          <h2 class="text-h5">
            <strong>{{ t('$vuetify.aboutFAQ.faq.a10') }}</strong>
          </h2>
          <p>{{ t('$vuetify.aboutFAQ.faq.a10') }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { useLocale } from 'vuetify';
  const { t } = useLocale();
  const search = ref('');
</script>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
