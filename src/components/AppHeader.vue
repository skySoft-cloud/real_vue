<template>
  <div>
    <el-row type="flex" class="row-bg bg-custom" justify="center">
      <el-col :span="24">
          <h3>学习VUE</h3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
    data () {
      return {
        msg: "我是头部！"
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
.bg-custom{
  background-color: lightslategrey;
  color: #fff;
}
</style>
