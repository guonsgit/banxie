
$(".leg").click(function(){
    // alert("疼")
 // var in1=document.getElementById("in1")
// var in2=document.getElementById("in2")
//1.找到input中得值
var uname=in1.value;
var upwd=in2.value;
// console.log(uname)
//2.创建正则表达式
var reg=/^[a-z0-9]{3,12}$/i
//3.判断如何错误，用户名提示
if(!reg.test(uname)){
    alert("用户名格式错误")
    return 
}
//4.判断如何错误，密码提示
if(!reg.test(upwd)){
    alert("密码格式错误")
    return
}
//5.发送ajax
// var url="login"
var obj={uname:uname,upwd:upwd};
$.ajax({
    url:"http://127.0.0.1:8080/login",
    type:"get",
    dataType:"json",
    data:obj,
    success:function(result){
     console.log(result);
    // alert("登录成功")
     if(result.code==-1){
    //     //失败
         alert("用户名或密码错误")
     }else{
       alert("登录成功")
       window.location.href = "/log/vans_index.html";
    }
}
});
})




