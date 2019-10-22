// var tabs=document.querySelectorAll("[data-click=tab]")
// //绑定事件处理函数
// var index=10;
// for(var tab of tabs){
//     tab.onclick=function(){
//         //查找要触发事件的元素
//         //先获得当前tab
//         var tab=this;
//         var id=tab.getAttribute("data-id");
//         //用id查找当前tab对应的div
//         var div=document.getElementById(id);
//         div.style.zIndex=index++;
    
//     }
// }


var c1=document.getElementById("c1")
var c2=document.getElementById("c2")
var red1=document.getElementById("red_border1")
var red2=document.getElementById("red_border2")
var content1=document.getElementById("content1")
var content2=document.getElementById("content2")
c1.onclick=function(){
     red1.style="display:block";
     red2.style="display:none";
    content1.style.zIndex=1;
    content2.style.zIndex=0
}
c2.onclick=function(){
    red1.style="display:none";
    red2.style="display:block"
    content2.style.zIndex=1;
    content1.style.zIndex=0;
}
// console.log(c1)
// console.log(red1)








/* 获取验证码60s倒计时*/
var vm=new Vue({
    el:"#app",
    data:{
        timer:0,
        text:"获取短信验证码"
    },
   methods:{
       change(){
           this.timer=5;
           this.text=`${this.timer}s后再发送`
             var count=setInterval(()=>{
                this.timer--;
                this.text=`${this.timer}s后再发送`
                   if(this.timer<0){
                       clearInterval(count)
                       this.text=`获取短信验证码`
                   }
             },1000)
       }
   }
})
/* 编写随机生成4位随机验证码*/


























