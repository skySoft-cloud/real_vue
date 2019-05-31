<template>
  <div>
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
    name: 'AppFooter',
    data () {
      return {
        msg:"苏嘟嘟儿的2019年"
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
