<template>
  <div class="content-wrap">
    <div id="myChart" class="center-class" :style="{width: '700px', height: '400px'}"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AppMale',
    data () {
      return {
        option : {
        title : {
          text: '狗崽子技能图',
          subtext: '',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['HTML','CSS','Javascript','Jquery','Vue']
        },
        series : [
          {
            name: '技能熟练度',
            type: 'pie',
            radius : '80%',
            center: ['50%', '50%'],
            data:[
              {value:15, name:'HTML'},
              {value:15, name:'CSS'},
              {value:30, name:'Javascript'},
              {value:25, name:'Jquery'},
              {value:15, name:'Vue'}
            ],
            color : ['rgb(249,205,173)', '#67E0E3', '#FFDB5C', '#E062AE', 'rgb(131,175,155)'],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
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
  margin:20px auto 0 100px;
}
</style>
