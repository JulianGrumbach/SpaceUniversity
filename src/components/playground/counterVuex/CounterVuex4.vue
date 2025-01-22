<template>
  <div class="counterVuex4">
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

// Class-style component
@Component
export default class CounterVuex4 extends Vue {
  get state() {
    return this.$store.state;
  }

  increment() {
    this.$store.commit('increment');
  }

  decrement() {
    this.$store.commit('decrement');
  }

  disabled() {
    return this.$store.state.count === 0;
  }
}
</script>
