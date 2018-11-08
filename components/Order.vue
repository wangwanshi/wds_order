<template>
  <div class="order">
    <order-title></order-title>
    <order-list :family="family" :index="index" @jump="jump"></order-list>
    <order-dishes :family="family" :dishes="dishes" :index="index" @addCart="addCart"></order-dishes>
    <order-cart :cartList="cartList" @addCart="addCart"></order-cart>
  </div>
</template>
<script>
import Toast from "mint-ui"
import orderTitle from "./Order/OrderTitle.vue"
import orderList from "./Order/OrderList.vue"
import orderDishes from "./Order/OrderDishes.vue"
import orderCart from "./Order/OrderCart.vue"
export default {
  data(){
      return{
          family:[],
          dishes:[],
          index:1,
          scroll:0,
          cartList:[],
          count:{},
          
      }
  },
  methods:{
      getFamily(){
          this.$http.get("http://127.0.0.1:3000/getFamily").then(result=>{
              this.family=result.body
          })
      },
      getDishes(){
          this.$http.get("http://127.0.0.1:3000/getDishes").then(result=>{
              this.dishes=result.body;
              for(var i=0;i<this.dishes.length;i++){
                this.dishes[i].count=0;
              }
          })
      },
      jump(index) {
        this.index=index
        let jump = document.getElementsByClassName('scroll-item');
        // 获取需要滚动的距离
        let total = jump[index-1].offsetTop;
        document.body.scrollTop=document.documentElement.scrollTop=parseInt(total)
      },
      dataScroll(){
          this.scroll=document.documentElement.scrollTop+document.body.scrollTop;
      },
      loadScroll(){
          var items=document.getElementsByClassName('dish-type-item');
          var ul=document.getElementsByClassName('dish-type-list')[0];
          var dishes = document.getElementsByClassName('scroll-item');
          for(var i=dishes.length-1;i>=0;i--){
              if(this.scroll>=dishes[i].offsetTop-100){
                this.index=i;
                break;
              }
          }
      },
      getCart(){
        var uid=1;
        var url="http://127.0.0.1:3000/getCart?uid="+uid
        this.$http.get(url).then(result=>{
          this.cartList=result.body;
          for(var item of this.cartList){
            for(var dish of this.dishes){
              if(dish.did==item.dishId){
                dish.count=item.count;
                
              }
            }
          }
        })
      },
      addCart(did,i){
        var uid=1
        for(var dish of this.dishes){
                if(did==dish.did){
                    if((i>0&&dish.count<10)||(i<0&&dish.count>0))
                    dish.count+=i
                    console.log(dish.did,dish.count)
                    var url="http://127.0.0.1:3000/addCart?uid="+uid+"&dishId="+did+"&count="+dish.count
                    this.$http.get(url).then(result=>{
                      console.log(result)
                    })
                }
            }
      }
  },
  watch: {
    scroll:function(){
      this.loadScroll()
    }
    },
  created(){
      this.getFamily()
      this.getDishes()
      this.getCart()
  },
  mounted() {
    window.addEventListener('scroll', this.dataScroll);
    },
  components:{
    "order-title":orderTitle,
    "order-list":orderList,
    "order-dishes":orderDishes,
    "order-cart":orderCart
  }
}
</script>
<style>
  body{
    background:rgb(241,241,241)
  }
  .order{
    position:relative;
    width:100%;
    height:100%;
  }
  .order-menu,.order-menu-info{
    width:100%;
    height:100%;
    position:relative;
}
</style>