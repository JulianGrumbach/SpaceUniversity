<template>
  <div class="counter1">
    <v-card color="#d67182" :elevation="count">
      <v-card-title>Declarative rendering</v-card-title>
      <v-card-subtitle>&nbsp;</v-card-subtitle>
      <v-card-text> Count: {{ count }} </v-card-text>
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
// Declarative rendering
export default {
  name: 'Counter1',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    disabled() {
      return this.count === 0;
    },
  },
};
</script>
