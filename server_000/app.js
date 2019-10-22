//app.js 服务器端项目
//1:下载第三方模块 
//express/express-session/cors/mysql
//2:将第三方模块引入到当前程序中
const express= require("express");
const session = require("express-session");
const cors = require("cors");
const mysql = require("mysql");
//3:创建数据库连接池
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   connectionLimit:20,
   database:"vans"
})

//4:创建web服务器监听 8080 端口
var server = express();
server.listen(8080);
//5:处理跨域 cors 
//5.1：配置允许访问程序地址(脚手架)
//     http://127.0.0.1:5050  (ok)
//     http://localhost:5050
//5.2:每请求是否验证true
server.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050","http://127.0.0.1:5501","http://localhost:5501"],
  credentials:true
}))
//6:配置session
//#session配置一定要在所有请求之前
server.use(session({
   secret:"128位字符串",    //#安全字符串
   resave:true,            //#每次请求保存数据 
   saveUninitialized:true  //#保存初始化数据
}));
//7:配置静态目录
//http://127.0.0.1:8080/01.jpg
server.use(express.static("public"));




//功能一:完成用户登录
//启动服务器app.js/启动数据库
//打开浏览器
//http://127.0.0.1:8080/login?uname=tom&upwd=123
//http://127.0.0.1:8080/login?uname=tom&upwd=122

server.get("/login",(req,res)=>{
  //6.1:接收网页传递数据 用户名和密码
  var u = req.query.uname;
  var p = req.query.upwd;
 console.log(u)
  //6.2:创建sql 
  var sql = "SELECT id FROM vans_login";
  sql+=" WHERE uname = ? AND upwd = md5(?)";
  //6.3:执行sql语句并且获取返回结果
  pool.query(sql,[u,p],(err,result)=>{
   //6.4:判断登录是否成功
   if(err)throw err;
   //6.5:将结果返回网页
   if(result.length==0){
     res.send({code:-1,msg:"用户名或密码有误"})
   }else{
     //获取当前登录用户id
     //result=[{id:2}]
     var id = result[0].id;
     //将用户id保存session对象中
     //uid当前登录：用户凭证
     req.session.uid = id;
     //console.log(req.session);
     res.send({code:1,msg:"登录成功"});
   }
  });
})


server.get("/productList",(req,res)=>{
  var pno=req.query.pno;
  var ps=req.query.ps;
  var sql = "SELECT price,sm,md,title";
  sql+=" FROM vans_product";
  sql+=" LIMIT ?,?"
  // console.log(pno,ps)
  var offset = (pno-1)*ps;//起始记录数 ?
  ps = parseInt(ps);      //行数       ?
  //5:发送sql语句
  pool.query(sql,[offset,ps],(err,result)=>{
    //6:获取返回结果发送客户端
    if(err)throw err;
    res.send({code:1,msg:"查询成功",
    data:result});
  });
})



//#此功能先行条件先登录
//0:复制 vans.sql中创建购物车表sql
//在mysql 执行
//1:接收客户端请求 /addcart GET
//http://127.0.0.1:8080/login?uname=tom&upwd=123
//http://127.0.0.1:8080/addcart?uid=1&lname=kk&price=9
//功能二：将指定商品添加至购物车
server.get("/addcart",(req,res)=>{
     //2.判断用户是否登录成功
     //如果uid为undefined 没登录
     var uid=req.session.uid;
     if(!uid){
       res.send({code:-1,msg:"请先登录"});
         return;
     }
     //3.获取客户端数据  
  //id   商品编号
  //price 商品价格
  //lname 商品名称
  var id=req.query.id;
  var price = req.query.price;
  var lname = req.query.lname; 
  //4.创建查询sql：当前用户是否购买过此商品
  var sql="SELECT id FROM vans_cart";
  sql+=" WHERE uid =? AND id=?"
  //5.执行sql语句
pool.query(sql,[uid,id],(err,result)=>{
  if(err)throw err;
  //在回调函数中判断下一步操作
  //没购买过此商品  添加
  //已购买过此商品  更新
  if(result.length==0){
    var sql=`INSERT INTO vans_cart VALUES(null,${id},${price},1,'${lname}',${uid})`;
  }else{
    var sql=`UPDATE vans_cart SET count+1 WHERE uid=${uid} AND id=${id}`;
  }
  //7.执行sql获取返回结果
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    //8.如果sql  UPDATE INSERT DELETE
    //判断执行成功 result.affectedRows 影响行数
    if(result.affectedRows>0){
      res.send({code:1,msg:"商品添加成功"})
    }else{
      res.send({code:-2,msg:"添加失败"});
    }
  })
})
})

server.get("/cart_no",(req,res)=>{
  var sql="SELECT id,lname,price FROM vans_cart"
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send({code:-1,msg:"失败"})
    }
    
    
  })
})





//功能三：查询指定用户购物车信息
server.get("/carts",(req,res)=>{
  //(1) 参数 uid
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请登录"});
    return;
  }
    //(2)创建sql语句
    var sql="SELECT id,lname,price FROM vans_cart WHERE uid=?";
    //(3)执行sql语句并且将数据库返回好结果发送客户
    pool.query(sql,[uid],(err,result)=>{
      if(err)throw err;
      res.send({code:1,msg:"查询成功",data:result});
      // return;
    })
});



