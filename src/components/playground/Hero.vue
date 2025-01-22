<template>
  <div class="hero">
    <v-container>
      <v-card tile :style="{ width: heroId ? '640px' : '320px' }">
        <div class="d-flex flex-row">
          <div style="min-width: 320px">
            <HeroList />
          </div>
          <div v-if="heroId" style="width: 320px">
            <HeroDetails :id="heroId" />
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api';
import HeroDetails from '@/components/playground/hero/HeroDetails';
import HeroList from '@/components/playground/hero/HeroList';

export default {
  name: 'Hero',
  props: {
    id: String,
  },
  components: {
    HeroDetails,
    HeroList,
  },
  setup(props) {
    const heroId = ref(props.id);
    watch(
      () => props.id,
      newValue => {
        heroId.value = newValue;
      }
    );
    return {
      heroId,
    };
  },
};
</script>
