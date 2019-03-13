<template>
  <div>
    <app-header></app-header>
    <app-aside></app-aside>
    <el-row type="flex" justify="center" class="main-min-height">
      <el-col :span="24">
      </el-col>
    </el-row>
    <app-footer></app-footer>
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
      'app-header':AppHeader,
      'app-aside':AppAside,
      'app-footer':AppFooter,
    }
  }
</script>

<style scoped>
.main-min-height{
  height:500px;
}
</style>
