<template>
  <div class="scroll-info">
    <div class="scroll-items">
        <div v-for="(item,i) in family" class="scroll-item" :key="item.fid">
            <div class="scroll-item-title" v-text="item.name"></div>  
            <div v-for="dish in dishes" v-if="dish.fid==item.fid" class="dish-info">
                <div class="dish-pic">
                    <img :src="dish.pic"/>
                </div>
                <div class="dish-name">
                    <span v-text="dish.title"></span>
                </div>
                <div class="dish-prices">
                    <div class="dish-price">
                        <span>￥</span>
                        <span v-text="dish.price.toFixed(2)"></span>
                    </div>
                    <div class="dish-count">
                        <div class="dish-count-minus"></div>
                        <span class="dish-count-num" :key="dish.did" v-model="count[i-1]">1</span>
                        <div class="dish-count-plus" @click="addCart(dish.did)"></div>
                    </div>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
  export default{
    data(){
        return{
            count:{},
            top:140,
            uid:1
        }
    },
    methods:{
        addCart(did){

        }
    },
    props:["family","dishes","index"],
    created(){

    },
  }
</script>
<style>
    .scroll-info{
        margin:0;
        margin-top:140px;
    }
    .scroll-item{
        width:100%;
    }
    .scroll-item-title{
        width:100%;
        height:30px;
        line-height: 30px;
        font-size:14px;
        color:#666;
        padding-left:20px;
        padding-top:10px;
        padding-right:25px;
    }
    .scroll-items{
        width:78%;
        float:right;
        background:#f1f1f1;
        margin-bottom:30px;
    }
    .dish-info{
        position: relative;
        background:#fff;
        border-radius:10px;
        box-shadow:6px 6px 10px 1px #ddd;
        width:90%;
        margin-top:10px;
        margin-left:10px;
        padding: 10px;
        height:130px;
    }
    .dish-pic{
        display:inline-block;
        position:absolute;
        left:20px;
        top:25px;
        width:75px;
        height:75px;
    }
    .dish-pic img{
        width:100%;
        height:100%;
    }
    .dish-name{
        position:absolute;
        right:20px;
        top:20px;
        font-weight: 600;
    }
    .dish-prices{
        position:absolute;
        top:50px;
        right:25px;
        padding-left:20px;
    }
    .dish-price{
        color:#ff3240;
    }
    .dish-price>span:first-child{
        font-size: 12px;
    }
    .dish-price>span:last-child{
        font-weight:550;
        font-size:20px;
    }
    .dish-count{
        display:flex;
        justify-content: center;
        align-content: center;
        position:absolute;
        border-radius:20px;
        padding:1px;
        right:1px;
        bottom:-40px;
    }
    .dish-count-plus,.cart-count-plus{
        border-radius:50%;
        width:24px;
        height:24px;
        background-image: url(http://127.0.0.1:3000/img/order/dishes/plus.png);
        background-repeat:no-repeat;
    }
    .dish-count-minus{
        border-radius:50%;
        width:24px;
        height:24px;
        background-image: url(http://127.0.0.1:3000/img/order/dishes/minus.png);
        background-repeat:no-repeat;
    }
    .dish-count-num{
        padding:0 8px;
    }
</style>