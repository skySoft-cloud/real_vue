<template>
  <div class="content-wrap">
    <baidu-map
      class="map"
      :scroll-wheel-zoom="true"
      :center="center"
      :zoom="zoom"
      >
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <bm-marker :position="{lng: 104.078897,lat: 30.545666}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157}}"></bm-marker>
      <bml-curve-line :points="points" :editing="true" @lineupdate="update"></bml-curve-line>
    </baidu-map>
  </div>
</template>

<script type="text/ecmascript-6">
  import {BmlCurveLine} from 'vue-baidu-map'
  export default {
    name: 'AppAddress',
    data () {
      return {
        center: {
          lng: 104.078897,
          lat: 30.545666
        },
        zoom: 18,
        points: [
          {lng: 103.962552, lat: 30.096494},
          {lng: 104.788992, lat: 29.485182},
          {lng: 104.041783, lat: 30.562814}
        ]
      }
    },
    mounted(){

    },
    components: {
      BmlCurveLine
    },
    methods: {
      syncCenterAndZoom (e) {
        const {lng, lat} = e.target.getCenter()
        this.center.lng = lng
        this.center.lat = lat
        this.zoom = e.target.getZoom()
      },
      update (e) {
        this.points = e.target.cornerPoints
      }
    }
  }
</script>

<style>
  .map {
    width: 100%;
    height: 500px;
  }
</style>
