//DOM4 步 
//1.获得要触发事件的元素
var txtName=document.getElementsByName("username")[0];
var txtPwd=document.getElementsByName("pwd")[0];
console.log(txtName)
 //2.绑定事件处理函数
 txtName.onfocus=function(){
    //3.查找要修改的元素
    //先获得当前文本框
    var txt=this;
    var div=txt.previousElementSibling
    div.classList.remove("vali_info");
   }
   txtName.onblur=function(){
    //查找要修改的元素
    //先获得当前文本框
    var txt=this;
    //修改元素
    var div=txt.previousElementSibling;  div.classList.add("vali_info") 
}

//DOM 4步   密码框获得焦点时显示
txtPwd.onfocus=function(){
    //3.查找要修改的元素
    //先获得当前文本框
    var txt=this;
    var div=txt.previousElementSibling
    div.classList.remove("vali_info");
   }
   txtPwd.onblur=function(){
    //查找要修改的元素
    //先获得当前文本框
    var txt=this;
    //修改元素
    var div=txt.previousElementSibling;  div.classList.add("vali_info") 
}

























