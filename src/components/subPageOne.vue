<template>
  <div class="content-wrap">
    <div class="block">
      <el-timeline style="text-align: left">
        <el-timeline-item timestamp="2019/3/14" placement="top">
          <el-card>
            <h4>嘟嘟儿报健身班</h4>
            <p>云狗儿 记录于 2019/5/22 16:22</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/3/22" placement="top">
          <el-card>
            <h4>民政局领证</h4>
            <p>云狗儿 记录于 2019/5/22 15:51</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/3/30" placement="top">
          <el-card>
            <h4>云狗儿定制西服</h4>
            <p>云狗儿 记录于 2019/5/22 16:25</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/5/12" placement="top">
          <el-card>
            <h4>拍摄婚纱照</h4>
            <p>云狗儿 记录于 2019/5/22 15:59</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/5/18" placement="top">
          <el-card>
            <h4>嘟嘟儿报驾校</h4>
            <p>云狗儿 记录于 2019/5/22 15:59</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'subPageOne',
    data () {
      return {

      }
    },
    mounted(){
      this.initPage();
    },
    methods: {
      async initPage(){
        let result = await this.$ajax.get({
          url:"person_info"
        });
        console.log(result);
      }
    }
  }
</script>

<style scoped>

</style>
