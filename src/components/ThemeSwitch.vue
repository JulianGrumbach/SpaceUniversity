<template>
  <UseDark
    v-slot="{ isDark, toggleDark }"
    @changed="toggleDarkMode"
  >
    <v-checkbox
      :value="isDark"
      density="compact"
      hide-details
      true-icon="fa-regular fa-moon"
      false-icon="fas fa-moon"
      @input="toggleDark()"
    />
  </UseDark>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify'
  import { UseDark } from '@vueuse/components'

  const theme = useTheme()

  const toggleDarkMode = (value: boolean) => {
    theme.global.name.value = value ? 'dark' : 'light'
  }
</script>
