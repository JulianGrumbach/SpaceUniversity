<template>
  <div class="counterVuex3">
    <v-card color="white" :elevation="state.count">
      <v-card-title>Composition API</v-card-title>
      <v-card-subtitle>direct to Vuex</v-card-subtitle>
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

// Composition API
export default {
  name: 'CounterVuex5',
  setup(props, { root }) {
    const increment = () => {
      root.$store.commit('increment');
    };
    const decrement = () => {
      root.$store.commit('decrement');
    };
    const disabled = () => {
      return root.$store.state.count === 0;
    };
    return {
      state: root.$store.state,
      increment,
      decrement,
      disabled,
    };
  },
};
</script>
