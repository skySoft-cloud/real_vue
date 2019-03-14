<template>
  <div>
    <App-Header></App-Header>
    <App-Aside></App-Aside>
    <!--<el-row type="flex" justify="center" class="main-min-height">
      <el-col :span="24">
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-col>
    </el-row>-->
    <App-Footer class="bg-custom fixed-class"></App-Footer>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader'
  import AppAside from '@/components/AppAside'
  import AppFooter from '@/components/AppFooter'
  export default {
    name: 'subPage',
    data () {
      return {
        msg:"我是子菜单之一！"
      }
    },
    components: {
      AppHeader,
      AppAside,
      AppFooter
    }
  }
</script>

<style scoped>
.main-min-height{
  height:500px;
}
  .fixed-class{
    position: fixed;bottom: 0;width: 100%;
  }
</style>
