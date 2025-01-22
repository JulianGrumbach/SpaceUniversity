<template>
  <div class="counterPersistent1" v-if="isInitialized()">
    <v-card color="#d67182" :elevation="store.getState().count">
      <v-card-title>Declarative rendering</v-card-title>
      <v-card-subtitle>&nbsp;</v-card-subtitle>
      <v-card-text> Count: {{ store.getState().count }} </v-card-text>
      <v-card-actions>
        <v-btn
          :disabled="disabled()"
          @click="store.decrement()"
          class="mx-2 button"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-btn @click="store.increment()" class="mx-2 button">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { counterStore } from '@/store/localStorage/counter-store';

// Declarative rendering
export default {
  name: 'CounterPersistent1',
  data() {
    return {
      store: counterStore,
    };
  },
  beforeMount() {
    counterStore.init();
  },
  methods: {
    isInitialized() {
      return this.store.isInitialized;
    },
    disabled() {
      return this.store.getState().count === 0;
    },
  },
};
</script>
