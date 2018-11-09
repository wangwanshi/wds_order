<template>
<div>
<div class="tiny-cart" @click="cart()">
    <div class="tiny-cart-left">
        <div class="tiny-cart-pic">
            <img src="img/order/cart.gif"/>
            <div class="tiny-count">
              <span class="tiny-countAll" v-text="countAll"></span>
            </div>
        </div>
        <div class="tiny-cart-text">
            <span v-if="isNull">购物车是空的</span>
            <span v-else class="priceAll">￥<span>222.00</span></span> 
        </div>

    </div>
    <div class="tiny-cart-right" v-show="!isNull">
        <a href="#" class="tiny-cart-ok">
            <span>选好了</span>
        </a>
    </div>
</div>
<div class="big-cart" v-show="cartShow">
    <div class="cart-bg" @click="cart()"></div>
    <div class="cart">
        <div class="cart-title">
            <p class="cart-text"><span class="cart-text-font">购物车</span></p>
            <p class="cart-cls">
                <img src="img/order/delete.png" class="cart-pic-delete"/>清空购物车
            </p>
        </div>
        <div class="cart-info">
            <ul class="cart-items">
                <li class="cart-item" v-for="item in cartList">
                    <div class="ordered-dish">
                        <span class="cart-dish-name" v-text="item.title"></span>
                        <div class="cart-couter">
                            <div class="cart-count-minus" @click="addCart(item.dishId,-1)"></div>
                            <span class="cart-count-num" v-text="item.count"></span>
                            <div class="cart-count-plus" @click="addCart(item.dishId,1)"></div>
                        </div>
                        <span class="cart-dish-price">￥<span v-text="item.price"></span></span>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        </div>
        </div>
</template>
<script>
export default{
    data(){
        return {
            cartShow:false,
            isNull:true,
            countAll:0
        }
    },
    props:["cartList"],
    methods:{
      cart(){
          this.cartShow=!this.cartShow
      },
      getCount(){
          this.countAll=0
        if(this.cartList.length!=0){
            this.isNull=false;
            for(let i=0;i<this.cartList.length;i++){
                this.countAll+=this.cartList[i].count
            }
        }
      },
      addCart(did,i){
          this.$forceUpdate();
          this.$emit("addCart",did,i)
      }
    },
    watch: {
    cartList:function(){
        this.$forceUpdate();
        this.getCount()
    }
    },
    created(){
        console.log(this.cartList)
        this.getCount()
    }
}
</script>
<style>
    .big-cart{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
    .cart{
        position:fixed;
        bottom:50px;
        width:100%;
        background:#fff;
        z-index: 999;
    }
    .cart-bg{
        position:fixed;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.5);
        z-index: 9;
    }
    .cart-title{
        display:flex;
        justify-content:space-between;
        align-items: center;
        width:100%;
        padding:0 15px;
        height:37px;
        background:#f5f5f5;
    }
    .cart-text{
        margin:0;
        line-height: 37px;
    }
    .cart-text::before{
        position:absolute;
        display:inline-block;
        content:"";
        float:left;
        width:4px;
        height:16px;
        margin-top:12px;
        margin-right:8px;
        background:rgb(255,50,64);
        border-radius: 2px;
    }
    .cart-text-font{
        margin-left: 12px;
        font-size: 16px;
        font-weight: 700;
        color:rgb(102,102,102)
    }
    .cart-cls{
        margin:0;
        line-height: 37px;
        font-size:13px;
        color:rgb(153,153,153)
    }
    .cart-pic-delete{
        display:inline-block;
        width:17px;
        height:17px;
        margin-bottom:2px;
        margin-right: 3px;
    }
    .cart-items{
        padding:0;
        width:100%;
        list-style: none;
    }
    .cart-item{
        height:52px;
        padding:9px 15px;
        border-top:1px solid #f5f5f5
    }
    .ordered-dish{
        height:34px;
        padding:6px 0;
    }
    .cart-dish-price{
        float:right;
        color:rgb(255,66,66);
        font-size: 15px;
        font-weight: 700;
    }
    .cart-dish-name{

    }
    .cart-couter{
        float:right;
        display:flex;
        margin-left:10px;
    }
    .cart-count-minus{
        border-radius:50%;
        width:24px;
        height:24px;
        background-image: url(http://127.0.0.1:3000/img/order/dishes/minus.png);
        background-repeat:no-repeat;
    }
    .cart-count-num{
        padding:0 8px;
    }
    .tiny-cart{
        position:fixed;
        bottom:0;
        width:100%;
        height:50px;
        background:#525252;
        z-index:99;
    }
    .tiny-cart-left{
        display:inline-block;
        position:relative;
        width:255px;
        height:50px;
        padding-left:10px;
    }
    .tiny-cart-pic{
        position:absolute;
        top:-16px;
        box-shadow:0 0 5px 1px #222;
        width:56px;
        height:56px;
        border-radius: 50%;
    }
    .tiny-cart-pic img{
        width:100%;
        height:100%;
    }
    .tiny-cart-text{
        position:absolute;
        left:80px;
        height:56px;
        margin-top:15px;
        color:#fff;
        font-weight:500;
        font-size:14px;
    }
    .tiny-cart-right{
        float:right;
        height:50px;
        width:120px;
        background-image:linear-gradient(to right,#ff2d35 0%,#ff7059 100%);
    }
    .tiny-cart-ok span{
        display:block;
        margin-top:15px;
        margin-left: 35px;
        color:#fff;
        font-weight:600;
        text-decoration: none;
    }
    li>div.tiny-count{
        top:10px;
        right:5px;
    }
    .tiny-count{
        position:absolute;
        top:0;
        right:0;
        width:16px;
        height:16px;
        border-radius: 50%;
        border:1px solid white;
        color:#fff;
        text-align:center;
        font-size:6px;
        line-height: 15px;
        background-image:linear-gradient(to bottom,#FF6060 0,#FF4F4F 100%);
    }
    .tiny-countAll{
        
    }
    .priceAll{
        font-size:14px;
    }
    .priceAll>span{
        margin-left:5px;
        font-size:20px;
    }
</style>