<template>
  <div class="heroes">
    <v-list>
      <v-subheader>Reveal the real identity of ...</v-subheader>
      <v-list-item
        :key="hero._id"
        :to="'/playground/hero/' + hero._id"
        v-for="hero in state.heroes"
      >
        {{ hero.name }}
        <v-spacer />
        <v-chip x-small outlined label class="ma-2" color="primary">
          {{ label(hero._id) }}
        </v-chip>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import { heroStore } from '@/store/pouchDB/hero-store';

export default {
  name: 'HeroList',
  setup() {
    const state = reactive({
      heroes: [],
    });
    heroStore.list().then(heroes => {
      state.heroes = heroes;
    });
    const label = id => id.slice(0, 6);
    return {
      label,
      state,
    };
  },
};
</script>
