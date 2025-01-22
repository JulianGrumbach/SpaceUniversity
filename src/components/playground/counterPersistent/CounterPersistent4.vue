<template>
  <div class="counterPersistent4" v-if="isInitialized">
    <v-card color="#83c468" :elevation="state.count">
      <v-card-title>Class-style</v-card-title>
      <v-card-subtitle>&nbsp;</v-card-subtitle>
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
import Vue from 'vue';
import Component from 'vue-class-component';
import { counterStore } from '@/store/localStorage/counter-store';

// Class-style component
@Component
export default class CounterPersistent4 extends Vue {
  get state() {
    return counterStore.getState();
  }

  get isInitialized() {
    return counterStore.isInitialized;
  }

  increment() {
    counterStore.increment();
  }

  decrement() {
    counterStore.decrement();
  }

  disabled() {
    return counterStore.getState().count === 0;
  }
}
</script>
