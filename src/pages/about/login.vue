<template>
  <div>
    <div class="welcome-container">
      <img
        src="@/assets/logo.png"
        alt="Logo"
        class="logo"
        style="display: block; margin: 0 auto;"
      >
      <h1 class="text-h4">
        {{ t('$vuetify.aboutLogin.welcome') }}
      </h1>
      <p>{{ t('$vuetify.aboutLogin.description') }}</p>
    </div>
    <div class="login-container">
      <h2 class="text-h5">
        {{ t('$vuetify.aboutLogin.login') }}
      </h2>
      <br>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">{{ t('$vuetify.aboutLogin.email') }}</label>
          <input
            v-model="email"
            type="email"
            required
          >
        </div>
        <div class="form-group">
          <label for="password">{{ t('$vuetify.aboutLogin.password') }}</label>
          <input
            v-model="password"
            type="password"
            required
          >
        </div>
        <div class="form-group">
          <a
            href="#"
            style="color: blue;
            font-size: 12px;"
          >
            {{ t('$vuetify.aboutLogin.reset') }}
          </a>
        </div>
        <button
          type="submit"
          style="margin-right: 10px; margin-bottom: 10px; background-color: #090091;"
        >
          {{ t('$vuetify.aboutLogin.login') }}
        </button>
        <button
          type="button"
          style="background-color: #090091;"
          @click="showRegisterPopup = true"
        >
          {{ t('$vuetify.aboutLogin.register') }}
        </button>
      </form>
      <RegisterPopup
        v-if="showRegisterPopup"
        @close="showRegisterPopup = false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useLocale } from 'vuetify';
  const { t } = useLocale();
  const email = ref('');
  const password = ref('');
  const showRegisterPopup = ref(false);

  function handleLogin() {
      console.log('Email:', email);
      console.log('Password:', password);
  }
</script>

<style scoped>
.welcome-container {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
}

button:hover {
  background-color: #0056b3;
}
</style>
