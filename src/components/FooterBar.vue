<template>
  <v-footer
    color="#090091"
    app
    height="80px"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <div class="logo-container">
            <img
              src="@/assets/logo-white-background.png"
              alt="Logo"
              class="logo"
            >
            <span class="title">Space University</span>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="8"
        >
          <div class="footer-controls">
            <v-menu offset-y>
              <template #activator="{ props }">
                <v-btn
                  variant="text"
                  tile
                  small
                  v-bind="props"
                  class="role-picker"
                >
                  <v-icon x-small>
                    {{ role.icon }}
                  </v-icon>
                  {{ role.name }}
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item
                  v-for="role in roles"
                  :key="role.name"
                  :title="role.name"
                  @click="iam(role)"
                >
                  <v-list-item-icon>
                    <v-icon :icon="role.icon" />
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-menu>
            <ThemeSwitch />
            <LanguageButton />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  import { usePochtaStore } from '@/stores/pochta';
  import { storeToRefs } from 'pinia';

  const store = usePochtaStore()
  const { iam } = store
  const { role } = storeToRefs(store)

  const roles = [
    {
      name: 'student',
      icon: 'fa-solid fa-user-graduate',
    },
    {
      name: 'tutor',
      icon: 'fa-solid fa-user-tie',
    },
  ]
</script>

<style scoped>
.logo {
  height: 40px;
  vertical-align: middle;
}
.title {
  color: white;
  font-size: 20px;
  margin-left: 10px;
  vertical-align: middle;
}
.footer-controls {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.role-picker {
  color: white !important;
}
.logo-container {
  position: absolute;
  left: 10px;
  top: 20px;
  display: flex;
  align-items: center;
}
</style>
