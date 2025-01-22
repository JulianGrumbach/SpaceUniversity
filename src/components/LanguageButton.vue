<template>
  <v-btn icon @click="toggleLanguage">
    <flag :iso="currentFlag" />
    <v-label>{{ currentLanguage }}</v-label>
  </v-btn>
</template>
<script>
export default {
  name: 'LanguageButton',
  data: () => ({
    currentLanguage: 'de',
    currentFlag: 'de',
  }),
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
      this.currentFlag = this.currentLanguage === 'en' ? 'us' : 'de';
      this.$vuetify.lang.current = this.currentLanguage;
    },
  },
};
</script>
