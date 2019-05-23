<template>
  <div class="content-wrap">
    <div id="myChart" class="center-class" :style="{width: '700px', height: '400px'}"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AppFemale',
    data () {
      return {
      option:{
        title: {
          text: '嘟嘟儿技能图'
        },
        tooltip: {},
        legend: {
          data: ['能力值（technician）']
        },
        radar: {
          // shape: 'circle',
          radius: 140,
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: 'HTML(10)', max: 10},
            { name: 'CSS(10)', max: 10},
            { name: 'Javascript(10)', max: 10},
            { name: 'Jquery(10)', max: 10},
            { name: 'Angular2(10)', max: 10}
          ]
        },
        series: [{
          name: '',
          type: 'radar',
          // areaStyle: {normal: {}},
          data : [
            {
              value : [7, 7, 8, 5, 9],
              name : '能力值（technician）'
            }
          ]
        }]
      }
      }
    },
    mounted(){
      this.initEcharts();
    },
    methods: {
      initEcharts(){
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        myChart.setOption(this.option)
      }
  }
  }
</script>

<style>
  .center-class{
    margin:50px auto 0 150px;
  }
</style>
