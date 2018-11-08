//app.js
//1:加载模块
const express = require("express");
const pool  = require("./pool");
//2:创建express对象
var app = express();
//服务器node.js 允许跨域访问配置项
//2.1:引入跨域模块   
const cors = require("cors");
//2.2:配置允许哪个程序跨域访问 脚手架   11:16
app.use(cors({
  origin:[
    "http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true
}))

//3:指定静态目录
//服务器指定目录 绝对路径 出错
app.use(express.static(__dirname+"/public"));

//4:绑定监听端口
app.listen(3000);

app.get("/getFamily",(req,res)=>{
  var sql="SELECT fid,name FROM wds_dish_family";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})
app.get("/getDishes",(req,res)=>{
  var sql="SELECT did,fid,title,price,details,pic FROM wds_dishes";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})
app.get("/getCart",(req,res)=>{
  var uid=parseInt(req.query.uid);
  var sql="select dishId,count,( select title from wds_dishes where did=dishId limit 1 ) as title,( select price from wds_dishes where did=dishId limit 1 ) as price from wds_shopping_cart inner join wds_dishes on did=dishId where uid=?"
  pool.query(sql,uid,(err,result)=>{
    if(err)throw err;
    res.send(result)
  })
})
app.get("/addCart",(req,res)=>{
  var {count,uid,dishId}=req.query;
  var sql1="SELECT count FROM wds_shopping_cart WHERE dishId=? AND uid=?"
  pool.query(sql1,[dishId,uid],(err,result)=>{
    if(err) throw err;
    if(result.legnth==0){
      var sql="INSERT INTO wds_shopping_cart VALUES (NULL,?,?,?)"
      pool.query(sql,[uid,dishId,count],(err,result)=>{
        res.send("添加成功");
      })
    }
  })
  
})
if(count==0){
      var sql="DELETE FROM wds_shopping_cart WHERE dishId=? AND uid=?"
      pool.query(sql,[dishId,uid],(err,result)=>{
        res.send("删除项目成功")
      })
    }else if(result.length==0){
      var sql="INSERT INTO wds_shopping_cart VALUES (NULL,?,?,?)"
      pool.query(sql,[uid,dishId,count],(err,result)=>{
        res.send("添加成功");
      })
    }else{
      var sql="UPDATE wds_shopping_cart SET count=? WHERE dishId=? AND uid=?"
      pool.query(sql,[count,dishId,uid],(err,result)=>{
        res.send("添加成功");
      })
    }