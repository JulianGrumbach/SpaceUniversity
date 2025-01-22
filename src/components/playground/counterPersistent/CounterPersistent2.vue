<template>
  <div class="counterPersistent2" v-if="isInitialized">
    <v-card color="#4e9483" :elevation="count">
      <v-card-title>Composition API</v-card-title>
      <v-card-subtitle>use ref() (failed)</v-card-subtitle>
      <v-card-text>Count: {{ count }}</v-card-text>
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
import { ref, onBeforeMount } from '@vue/composition-api';
import { counterStore } from '@/store/localStorage/counter-store';

// Composition API
export default {
  name: 'CounterPersistent2',
  setup() {
    onBeforeMount(async () => await counterStore.init());
    const count = ref(counterStore.getState().count);
    const increment = () => {
      count.value++;
      counterStore.increment();
    };
    const decrement = () => {
      count.value--;
      counterStore.decrement();
    };
    const disabled = () => {
      return count.value === 0;
    };
    return {
      count,
      decrement,
      disabled,
      increment,
      isInitialized: counterStore.isInitialized,
    };
  },
};
</script>
