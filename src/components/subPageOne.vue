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
        msg:"内容区！"
      }
    },
    mounted(){
      this.initPage();
    },
   methods:{
     initPage(){
       this.$ajax.get("../static/test/person_info").then((json_data)=>{
         console.log(json_data)
       })
     }
   }
  }
</script>

<style scoped>

</style>
