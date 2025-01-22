<template>
  <div class="counter3">
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

<script>
import { reactive } from '@vue/composition-api';

// Reactive system in composition API
// https://dev.to/blacksonic/you-might-not-need-vuex-with-vue-3-52e4
export default {
  name: 'Counter3',
  setup() {
    const state = reactive({
      count: 0,
    });
    const increment = () => {
      state.count++;
    };
    const decrement = () => {
      state.count--;
    };
    const disabled = () => {
      return state.count === 0;
    };
    return {
      state,
      increment,
      decrement,
      disabled,
    };
  },
};
</script>
