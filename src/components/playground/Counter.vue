<template>
  <div class="counter">
    <v-tabs>
      <v-tab href="#tab-counter">Counter</v-tab>
      <v-tab href="#tab-counter-persistent">with persistent store</v-tab>
      <v-tab href="#tab-counter-vuex">with Vuex</v-tab>

      <v-tab-item id="tab-counter">
        <div class="d-flex flex-wrap">
          <Counter1 class="pa-2" />
          <Counter2 class="pa-2" />
          <Counter3 class="pa-2" />
          <Counter4 class="pa-2" />
        </div>
      </v-tab-item>

      <v-tab-item id="tab-counter-persistent">
        <div class="d-flex flex-wrap">
          <CounterPersistent1 class="pa-2" />
          <CounterPersistent2 class="pa-2" />
          <CounterPersistent3 class="pa-2" />
          <CounterPersistent4 class="pa-2" />
          <CounterPersistent5 class="pa-2" />
        </div>
      </v-tab-item>

      <v-tab-item id="tab-counter-vuex">
        <div class="d-flex flex-wrap">
          <CounterVuex1 class="pa-2" />
          <CounterVuex2 class="pa-2" />
          <CounterVuex3 class="pa-2" />
          <CounterVuex4 class="pa-2" />
          <CounterVuex5 class="pa-2" />
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Counter1 from '@/components/playground/counter/Counter1.vue';
import Counter2 from '@/components/playground/counter/Counter2.vue';
import Counter3 from '@/components/playground/counter/Counter3.vue';
import Counter4 from '@/components/playground/counter/Counter4.vue';

import CounterPersistent1 from '@/components/playground/counterPersistent/CounterPersistent1.vue';
import CounterPersistent2 from '@/components/playground/counterPersistent/CounterPersistent2.vue';
import CounterPersistent3 from '@/components/playground/counterPersistent/CounterPersistent3.vue';
import CounterPersistent4 from '@/components/playground/counterPersistent/CounterPersistent4.vue';
import CounterPersistent5 from '@/components/playground/counterPersistent/CounterPersistent5.vue';

import CounterVuex1 from '@/components/playground/counterVuex/CounterVuex1.vue';
import CounterVuex2 from '@/components/playground/counterVuex/CounterVuex2.vue';
import CounterVuex3 from '@/components/playground/counterVuex/CounterVuex3.vue';
import CounterVuex4 from '@/components/playground/counterVuex/CounterVuex4.vue';
import CounterVuex5 from '@/components/playground/counterVuex/CounterVuex5.vue';

export default {
  name: 'Counter',
  components: {
    Counter1,
    Counter2,
    Counter3,
    Counter4,
    CounterPersistent1,
    CounterPersistent2,
    CounterPersistent3,
    CounterPersistent4,
    CounterPersistent5,
    CounterVuex1,
    CounterVuex2,
    CounterVuex3,
    CounterVuex4,
    CounterVuex5,
  },
  beforeCreate() {
    this.$store.commit('init');
  },
};
</script>
