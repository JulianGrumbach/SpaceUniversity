<template>
  <div class="map">
    <v-card>
      <v-row
        align="center"
        justify="center"
      >
        <ZoomImg
          :src="map"
          :alt="t('$vuetify.campus.map.alt')"
          style="height: 80vh;"
          zoom-type="move"
          trigger="click"
          :zoom-scale="3"
          :show-zoom-btns="true"
          :step="1"
          :persist="true"
        >
          <template #loading>
            <v-container
              class="d-flex align-center justify-center h-100"
            >
              <v-progress-circular indeterminate />
            </v-container>
          </template>
          <template #error>
            <v-container
              class="d-flex align-center justify-center h-100"
            >
              <v-alert
                :title="t('$vuetify.error.image')"
                :text="t('$vuetify.campus.map.error')"
                type="error"
              />
            </v-container>
          </template>
        </ZoomImg>
      </v-row>
    </v-card>
  </div>
</template>
<script setup lang="ts">
  import map from '@/assets/maps/map.jpg'
  import { useLocale } from 'vuetify'
  const { t } = useLocale()
</script>
<style>
  button.controls-btn.zoom-out-btn:before {
      content: "\f010";
      opacity: 0.5;
      font-family: "Font Awesome 6 Free";
      color: black;
  }
  button.controls-btn.zoom-in-btn:before {
      content: "\f00e";
      opacity: 0.5;
      font-family: "Font Awesome 6 Free";
      color: black;
  }

  button.controls-btn.zoom-out-btn:hover::before {
    opacity: 0.4;
  }
  button.controls-btn.zoom-in-btn:hover::before {
    opacity: 0.4;
  }

  button.controls-btn.zoom-in-btn:active::before {
    opacity: 0.3;
  }
  button.controls-btn.zoom-out-btn:active::before {
    opacity: 0.3;
  }
</style>
