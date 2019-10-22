$(function(){
    $.ajax({
       url:"footer.html",
       type:"get",
       success:function(result){
           $(result).appendTo("#footer_1");
           $(`<link rel="stylesheet" href="../css/footer.css"/>`).appendTo("footer")
       }
    })
})
