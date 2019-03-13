<template>
  <div>
    <el-row type="flex" class="row-bg bg-custom" justify="center">
      <el-col :span="24">
        <h1>{{msg}}</h1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'AppFooter',
    data () {
      return {
        msg:"我是底部！"
      }
    }
  }
</script>

<style scoped>
  .bg-custom{
    background-color: lightslategrey;
    color: #fff;
  }
</style>
