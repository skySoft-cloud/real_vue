<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24">
        <img class="logo" src="../assets/logo.png" alt="logo">
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="header-slide">
          <el-col :span="24">
            <img src="../assets/img/menu-left.png" alt="">
            <span class="bg-header"></span>
            <img src="../assets/img/menu-right.png" alt="">
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    data () {
      return {
        msg: "苏嘟嘟儿的2019年"
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .logo{
    height:78px;
  }
  .header-slide{
    font-size:0;
  }
  .header-slide img {
    height: 48px;

  }
  .bg-header {
    display: inline-block;
    height: 52px;
    width: 94%;
    margin-bottom: 5px;
    background: url("../assets/img/menu-bg.png");
  }
</style>
