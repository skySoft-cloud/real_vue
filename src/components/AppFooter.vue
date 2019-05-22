<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="20">
        <h3>{{msg}}</h3>
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

</style>
