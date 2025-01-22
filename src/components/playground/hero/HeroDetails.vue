<template>
  <div class="hero">
    <v-card flat tile>
      <v-img :src="heroImage()" />
      <v-card-text>
        {{ state.hero.name }} is {{ state.hero.alias }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { reactive, watch } from '@vue/composition-api';
import { heroStore } from '@/store/pouchDB/hero-store';

export default {
  name: 'HeroDetails',
  props: {
    id: String,
  },
  setup(props, { root }) {
    const state = reactive({
      hero: {
        alias: '',
        img: '',
        name: '',
      },
    });
    const loadHero = id => {
      heroStore.read(id).then(hero => {
        if (!hero.error) {
          state.hero = hero;
          root.$route.meta.breadcrumbs[3].text = hero.name;
        }
      });
    };
    if (props.id) {
      loadHero(props.id);
    }
    const heroImage = () => {
      return require(`@/assets/img/heroes/${state.hero.img}`);
    };
    watch(
      () => props.id,
      newValue => {
        loadHero(newValue);
      }
    );
    return {
      state,
      heroImage,
    };
  },
};
</script>
