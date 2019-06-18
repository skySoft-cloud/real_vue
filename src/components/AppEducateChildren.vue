<template>
  <div class="content-wrap">
    <h3>购物车页面示例</h3>
    <div v-if="product_list.length>0">
      <table border="1" style="margin: 0 auto;border-collapse: collapse">
        <thead>
        <th></th>
        <th>商品名称</th>
        <th>商品单价</th>
        <th>购买数量</th>
        <th>操作</th>
        </thead>
        <tbody>
        <tr v-for="(product,pro_key) in product_list" :key="pro_key">
          <td>{{pro_key+1}}</td>
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td><button @click="reduceQuatity(pro_key)">-</button>{{product.quatity}}<button @click="addQuatity(pro_key)">+</button></td>
          <td><button @click="removeProduct(pro_key)">移除</button></td>
        </tr>
        </tbody>
      </table>
      <p>总价：{{sumsPrice}}</p>
    </div>
    <div v-else>
      <h3>购物车空空如也！</h3>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AppEducateChildren',
    data () {
      return {
        product_list:[
          {
            pro_id:"1",
            name:"iphone7",
            price:5000,
            quatity:1
          },
          {
            pro_id:"2",
            name:"ipad",
            price:3500,
            quatity:1
          }, {
            pro_id:"3",
            name:"iphoneX",
            price:9000,
            quatity:2
          }
        ]
      }
    },
    computed:{
      /*计算总价*/
      sumsPrice(){
        let sums_price = 0;
        for(let i = 0;i<this.product_list.length;i++){
          sums_price+=(this.product_list[i]["price"]*this.product_list[i]["quatity"])
        }
        // 超过三位数需要用逗号分隔
        if(sums_price > 999){
          sums_price = sums_price.toString().replace(/\B(?=(\d{3})+$)/g,",")
        }
        return sums_price;
      }
    },
    mounted(){

    },
    methods: {
      /*数量减去操作*/
      reduceQuatity(pro_key){
        if (this.product_list[pro_key]["quatity"] == 0) {
          return;
        }
        this.product_list[pro_key]["quatity"]--
      },
      /*数量增加操作*/
      addQuatity(pro_key){
        this.product_list[pro_key]["quatity"]++
      },
      /*移除商品*/
      removeProduct(pro_key){
        this.product_list.splice(pro_key,1)

      }
    }
  }
</script>

<style>
  table th,td{
    padding:10px 25px;
  }
</style>
