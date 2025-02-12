<template>
  <div
    class="popup-overlay"
    @click.self="$emit('close')"
  >
    <div class="popup-container">
      <h2>{{ t('$vuetify.aboutLogin.register') }}</h2>
      <br>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="registerEmail">{{ t('$vuetify.aboutLogin.email') }}</label>
          <input
            v-model="registerEmail"
            type="email"
            required
          >
        </div>
        <div class="form-group">
          <label for="registerPassword">{{ t('$vuetify.aboutLogin.password') }}</label>
          <input
            v-model="registerPassword"
            type="password"
            required
          >
        </div>
        <div class="form-group">
          <label for="registerPassword">{{ t('$vuetify.aboutLogin.repeat') }}</label>
          <input
            v-model="registerPassword"
            type="password"
            required
          >
        </div>
        <button
          type="submit"
          style="background-color: #090091;"
        >
          {{ t('$vuetify.aboutLogin.register') }}
        </button>
        <button
          type="button"
          style="background-color: #090091;"
          @click="$emit('close')"
        >
          {{ t('$vuetify.aboutLogin.close') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useLocale } from 'vuetify';
  const { t } = useLocale();
  const registerEmail = ref('');
  const registerPassword = ref('');

  defineEmits(['close'])

  function handleRegister() {
      // Handle registration logic here
      console.log('Register Email:', registerEmail);
      console.log('Register Password:', registerPassword);
  }
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-container {
  background: rgba(var(--v-theme-background), 1);
  padding: 20px;
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid grey;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
