<template>
  <div class="content-wrap">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="时间管理" name="time_manage">时间管理</el-tab-pane>
      <el-tab-pane label="职业目标" name="job_des">职业目标</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AppManageWork',
    data () {
      return {
        activeName2: 'time_manage'
      }
    },
    mounted(){

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style>

</style>
