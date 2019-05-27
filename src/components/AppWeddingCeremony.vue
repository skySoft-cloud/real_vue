<template>
  <div class="content-wrap">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(url,index) in banner" :key="index">
        <img :src="url.img_url">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AppWeddingCeremony',
    data () {
      return {
        banner:[
          {img_url:require('../assets/img/banner01.png')},
          {img_url:require('../assets/img/banner02.png')},
          {img_url:require('../assets/img/banner03.png')}
        ]
      }
    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item img{
    width: 100%;
  }
</style>
