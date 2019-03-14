<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
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
        msg:"创建于2019年3月14日！"
      }
    }
  }
</script>

<style scoped>

</style>
