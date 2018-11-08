<template>
<div>
    <div class="order-title">
        <div class="title-one">
            <div class="title-shop-info">
                <!--左侧logo-->
                <div class="title-logo">
                    <img src="img/order/title-logo.jpg"/>
                </div>
                <div class="title-text">
                    <span class="welcome">海底捞餐厅赛格店欢迎您！</span>
                </div>
                <div class="title-status">
                    <span class="table-num">桌号：000桌</span><span>|</span>
                    <span class="people-num">用餐人数：6人</span><span>|</span>
                    <span>预留：1</span>
                </div>
                <div class="search-logo">
                    <img src="img/order/search-white.png"/>
                </div>
            </div>
            <div class="title-carousel" @click="notice(true)">
                <div class="title-carousel-info display_block">
                    <i class="title-carousel-tag"></i>
                    <span class="carousel-text">商家公告："亲爱的顾客，您好！
                    </span>
                </div>
                <div class="title-carousel-info">
                    <i class="title-carousel-tag"></i>
                    <span class="carousel-text">营业时间：10:00-22:00</span>
                </div>
                <div class="more-desc">更多优惠</div>
            </div>
        </div>
    
        <div class="ad">
            <a href="#">
                <img src="http://127.0.0.1:3000/img/order/ad.jpg" />
            </a>
        </div>
    </div>
    
    <div class="notice" v-show="isShow">
        <div class="notice-title">
            <div class="notice-logo">
                <img src="http://127.0.0.1:3000/img/order/title-logo.jpg"/>
            </div>
            <p class="notice-text-title">海底捞火锅（赛格店）</p>
            <p class="shop-discount-title-1">商户信息</p>
            <div class="shop-discount">
                <br/>
                <p>营业时间：10:00-22:00</p>
                <p>电话：4008107107</p>
                <p>地址：陕西省西安市雁塔区长安中路123号赛格国际购物中心</p>
            </div>
            <p class="shop-discount-title-2">商户公告</p>
            <div class="shop-discount">
                <br/>
                <p>亲爱的顾客，您好！为了保证您的正常用餐，请在高峰期提前下单。如您在用餐过程中有任何问题，导致您没有收到账单，请联系服务员</p>
            </div>
            <div class="notice-close" @click="notice(false)">
                <span class="close-icon"></span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
  export default {
      data(){
          return {
              isShow:false
          }
      },
      methods:{
          notice(bool){
              this.isShow=bool;
          }
      }
  }
</script>
<style>
    .order-title{
        position:fixed;
        top:0;
        height:187px;
        width:100%;
        padding-top: 12px;
        padding-left:15px;
        padding-right:15px;
        background-image:url(http://127.0.0.1:3000/img/order/title-background.png);
        background-position: 0 100%;
        transition:transform .3s linear;
        z-index:999;
    }
    .title-shop-info{
        position: relative;
        width:100%;
        height:65%;
        border-bottom: 1px dashed #A46166;
    }
    .title-one{
        height:55%;
        width:100%;
    }
    .title-logo{
        position:absolute;
        width:50px;
        height:50px;
        border-radius: 50%;
    }
    .title-logo img{
        width:100%;
        height: 100%;
        border-radius: 50%;
    }
    .title-text{
        position:absolute;
        left:50px;
        height:16px;
        color:white;
        font-size: 15px;
        margin-top:5px;
        margin-left:10px;
    }
    .title-status{
        position:absolute;
        left:58px;
        bottom:12px;
        font-size: 12px;
        color:#fff;
    }
    .title-status span{
        padding:0 2px;
    }
    /********����********/
    .search-logo{
        position:absolute;
        right:0;
        width:22px;
        height:22px;
    }
    .search-logo img{
        width:100%;
        height:100%;
    }
    .title-carousel{
    height:35%;
    width:100%;
    }
    .more-desc{
        float:right;
        margin-top:10px;
        font-size:12px;
        color:#fff;
        line-height: 12px;
    }
    .title-carousel{
        display:flex;
        justify-content: center;
        align-content: center;
    }
    .title-carousel-info{
        display:none;
        width:82%;
        height:26px;
        font-size:12px;
        color:#fff;
    }
    .title-carousel-tag{
        float:left;
        margin-top:9px;
        width:15px;
        height:15px;
        background-image:url(http://127.0.0.1:3000/img/order/carousel.png);
    }
    .display_block{
        display:block;
    }
    .carousel-text{
        display:inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top:3px;
        margin-left:5px;
        line-height: 26px;
    }
    .ad{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:80px;
    }
    .ad a img{
        width:100%;
        height:100%;
    }
    .scroll-info{
        margin-top:187px;
    }
    .notice{
    position:absolute;
    left: 0;
    top:-187px;
    height:900px;
    background:rgba(0,0,0,.8);
    color:#fff;
    z-index:999;
    }
    .notice-text-title{
        font-size:18px;
        margin-top:9px;
    }
    .notice-title{
        display:flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        height:100%;
    }
    .notice-logo{
        width: 55px;
        height:55px;
        border-radius: 50%;
        margin-top:25px;
    }
    .notice-logo img{
        width:100%;
        height:100%;
        border-radius: 50%;
    }
    .shop-discount{
        display:flex;
        flex-direction: column;
        align-items: center;
        position:relative;
        margin-top:30px;
        width:85%;
        font-size:12px;
        border-top:1px solid rgba(255,255,255,.3);
    }
    .shop-discount p{
        width:80%;
    }
    .shop-discount-title-1{
        position:absolute;
        top:120px;
        padding:0 5px;
        
    }
    .shop-discount-title-2{
        position:absolute;
        top:290px;
        padding:0 5px;
    }
    .notice-close{
        margin:0 auto;
        margin-top:50px;
        width:50px;
        height:50px;
        border-radius: 50%;
        border:1px solid #666;
    }
    .close-icon{
        display:inline-block;
        width:50px;
        height:50px;
        overflow:hidden;
        position:relative;
    }
    .close-icon::after,.close-icon::before{
        position:absolute;
        content:"";
        top:24px;
        left:11px;
        margin-top:-1px;
        background:#fff;
        width:50%;
        height:3px;
    }
    .close-icon::after{
        -webkit-transform:rotate(-45deg);
        -moz-transform:rotate(-45deg);
        -ms-transform:rotate(-45deg);
        -o-transform:rotate(-45deg);
    }
    .close-icon::before{
        -webkit-transform:rotate(45deg);
        -moz-transform:rotate(45deg);
        -ms-transform:rotate(45deg);
        -o-transform:rotate(45deg);
    }
</style>