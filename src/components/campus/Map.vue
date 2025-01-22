<template>
  <div class="map">
    <v-card>
      <v-container fluid grid-list-lg>
        <v-row align="center" justify="center">
          <v-zoomer
            style="height: 80vh; border: solid 1px silver;"
            :maxScale="maxZoom"
            :minScale="minZoom"
            pivot="cursor"
            ref="zoomer"
          >
            <img
              :src="logoPath"
              style="object-fit: contain; width: 100%; height: 100%;
              user-drag: none; -webkit-user-drag: none; user-select: none;
              -moz-user-select: none; -webkit-user-select: none;
              -ms-user-select: none; pointer-events: none;"
            />
          </v-zoomer>
        </v-row>

        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-slider
            ref="slider"
            :max="maxZoom"
            :min="minZoom"
            v-model="zoom"
            step="0.1"
            append-icon="fa-search-plus"
            prepend-icon="fa-search-minus"
            @click:append="zoomIn"
            @click:prepend="zoomOut"
            @change="$refs.zoomer.scale = $event"
          ></v-slider>
        </v-card-actions>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'Map',
  data: () => ({
    maxZoom: 5,
    minZoom: 0.9,
    zoom: 1,
    logoPath: require('@/assets/img/maps/map.jpg'),
  }),
  methods: {
    zoomIn() {
      this.$refs.zoomer.zoomIn();
      this.zoom = this.$refs.zoomer.scale;
    },
    zoomOut() {
      this.$refs.zoomer.zoomOut();
      this.zoom = this.$refs.zoomer.scale;
    },
  },
  computed: {
    zoomerScale() {
      return this.$refs.zoomer ? this.$refs.zoomer.scale : null;
    },
  },
  watch: {
    zoomerScale(newScale) {
      if (newScale !== null) {
        console.log('Zoomer scale changed:', newScale);
      }
    },
  },
};
</script>
