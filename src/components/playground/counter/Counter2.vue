<template>
  <div class="counter2">
    <v-card color="#4e9483" :elevation="count">
      <v-card-title>Composition API</v-card-title>
      <v-card-subtitle>use ref()</v-card-subtitle>
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

<script>
import { ref } from '@vue/composition-api';

// Composition API
export default {
  name: 'Counter2',
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    const disabled = () => {
      return count.value === 0;
    };
    return {
      count,
      increment,
      decrement,
      disabled,
    };
  },
};
</script>
