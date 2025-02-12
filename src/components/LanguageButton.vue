<template>
  <v-btn
    title="Change language"
    variant="text"
    @click="changeLocale"
  >
    <FlagIcon
      square
      :code="current === 'de' ? 'de' : 'us'"
    />
    <v-label>{{ current }}</v-label>
  </v-btn>
</template>
<script setup lang="ts">
  import { useLocale } from 'vuetify'

  const { current } = useLocale()

  function changeLocale() {
    current.value = current.value === 'en' ? 'de' : 'en'
  }
</script>
