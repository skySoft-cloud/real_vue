<template>
  <div>
    <el-row type="flex" justify="center" class="main-min-height">
      <el-col :span="4">
        <el-menu
          :default-active="this.$route.path"
          class="el-aside-min-height"
          @open="handleOpen"
          @close="handleClose"
          background-color="#fff"
          text-color="#000"
          :router="true"
          :unique-opened="true"
          :collapse-transition="true"
          active-text-color="lightpink">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-fa fa-user"></i>
              <span>人物地点</span>
            </template>
            <el-menu-item index="appmale">陈云</el-menu-item>
            <el-menu-item index="appfemale">苏继培</el-menu-item>
            <el-menu-item index="appaddress">地点连线</el-menu-item>
          </el-submenu>
          <el-menu-item index="subpageone">
            <i class="el-icon-fa fa-transgender"></i>
            <span slot="title">重要历程</span>
          </el-menu-item>
          <el-menu-item index="appweddingceremony">
            <i class="el-icon-fa fa-heartbeat"></i>
            <span slot="title">婚礼纪实</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-fa fa-calendar"></i>
              <span slot="title">婚后计划</span>
            </template>
            <el-menu-item index="appeducatechildren">安排工作</el-menu-item>
            <el-menu-item index="appmanagework">赡养老人</el-menu-item>
            <el-menu-item index="appsupportelderly">教育子女</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'AppAside',
    data () {
      return {
        active_index: ""
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
  .el-aside-min-height {
    height: 500px;
    text-align: left;
  }
</style>
