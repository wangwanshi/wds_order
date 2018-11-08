<template>
    <div class="dish-type-scroll">
        <div class="scroll-wrapper">
            <!--*****************左侧导航栏父元素*******************-->
            <ul class="dish-type-list">
                <li v-for="item in family" @click="getActive(item.fid)" class="dish-type-item" :class="index+1==item.fid?'active':index+1==item.fid+1?'before-active':index+1==item.fid-1?'after-active':''" :key="item.fid">
                    <img v-show="item.name=='热门'" style="display:inline-block;margin-top:17px;width:15px;height:15px" src="img/order/fire.png"/>
                    <p v-text="item.name"></p>
                    <div style="display:none" class="tiny-count">0</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  export default{
      data(){
          return {
            
          }
      },
      props:["family","index"],
      methods:{
          getActive(i){
            this.$emit("jump",i)
          },
      },
      created(){
         
      }
  }
</script>
<style>
    .dish-type-list{
        overflow:auto;
        padding:0;
        width:100%;
        height:420px;
        list-style: none;
        font-size:16px;
        background:#f1f1f1;
        margin:0
    }
    .active{
        border-left:2px solid #ff3d3e;
        width:78px;
        color:#ff3d3e;
        background:#f1f1f1;
    }
    .before-active{
        border-radius:0 0 7px 0;
    }
    .after-active{
         border-radius:0 7px 0 0 ;
    }
    .fire{
        border-radius: 50%;
        display: inline-block;
    }
    .fire img{
        display:inline-block;
        border-radius:50%;
    }
    li.active{
        border-left:2px solid #ff3d3e;
        width:78px;
        color:#ff3d3e;
        background:#f1f1f1;
    }
    .scroll-wrapper{
        background:#f1f1f1;
    }
    .before-active{
        border-radius:0 0 7px 0;
    }
    .after-active{
        border-radius:0 7px 0 0 ;
    }

    .dish-type-item{
        position:relative;
        display:flex;
        width:80px;
        height:47px;
        padding:0 10px;
        line-height: 47px;
        font-size: 13px;
        border-bottom:1px solid #f1f1f1;
        background:#fff;
    }
    .dish-type-item>p{
        display: inline-block;
        margin-left:2px;
        width:52px;
        color:#666;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .dish-type-scroll{
        width:22%;
        position:fixed;
        left:0;
        top:187px;
        overflow: auto;
        transition:transform .3s linear;
    }
    
</style>