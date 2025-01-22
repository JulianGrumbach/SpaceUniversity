<template>
  <div class="counterPersistent3" v-if="isInitialized">
    <v-card color="#e4a178" :elevation="state.count">
      <v-card-title>Composition API</v-card-title>
      <v-card-subtitle>use reactive()</v-card-subtitle>
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

// Reactive system in composition API
// https://dev.to/blacksonic/you-might-not-need-vuex-with-vue-3-52e4
export default {
  name: 'CounterPersistent3',
  setup() {
    onBeforeMount(async () => await counterStore.init());
    const state = reactive(counterStore.getState());
    const increment = () => {
      counterStore.increment();
    };
    const decrement = () => {
      counterStore.decrement();
    };
    const disabled = () => {
      return state.count === 0;
    };
    return {
      decrement,
      disabled,
      increment,
      isInitialized: counterStore.isInitialized,
      state,
    };
  },
};
</script>
