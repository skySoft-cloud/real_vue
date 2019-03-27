<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'subPageOne',
    data () {
      return {
        msg: "内容区！"
      }
    },
    mounted(){
      this.initPage();
    },
    methods: {
      initPage(){
       /* this.$ajax.post("person_info").then((json_data)=> {
          console.log(json_data)
        })*/
        let result = this.$ajax.get("person_info");
        console.log(result);
      }
    }
  }
</script>

<style scoped>

</style>
