<template>
  <div class="counterVuex1">
    <v-card color="#d67182" :elevation="$store.state.count">
      <v-card-title>Declarative rendering</v-card-title>
      <v-card-subtitle>&nbsp;</v-card-subtitle>
      <v-card-text> Count: {{ $store.state.count }} </v-card-text>
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
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    disabled() {
      return this.$store.state.count === 0;
    },
  },
};
</script>

<style scoped>
.counter1 {
  background-color: #d67182;
}
</style>
