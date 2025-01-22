<template>
  <div class="counterPersistent5" v-if="isInitialized">
    <v-card color="white" :elevation="state.count">
      <v-card-title>Composition API</v-card-title>
      <v-card-subtitle>direct to counter store</v-card-subtitle>
      <v-card-text>Count: {{ state.count }}</v-card-text>
      <v-card-actions>
        <v-btn :disabled="disabled()" @click="decrement()" class="mx-2 button">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn @click="increment()" class="mx-2 button">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { reactive, onBeforeMount } from '@vue/composition-api';
import { counterStore } from '@/store/localStorage/counter-store';

// https://github.com/Mario-Brendel/Vue3-Tests/tree/store
export default {
  name: 'CounterPersistent5',
  setup() {
    onBeforeMount(async () => await counterStore.init());
    const increment = () => {
      counterStore.increment();
    };
    const decrement = () => {
      counterStore.decrement();
    };
    const disabled = () => {
      return counterStore.getState().count === 0;
    };
    return {
      state: counterStore.getState(),
      isInitialized: counterStore.isInitialized,
      increment,
      decrement,
      disabled,
    };
  },
};
</script>
