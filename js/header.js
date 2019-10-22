$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            $(result).appendTo("#header_1");
           $(`<link rel="stylesheet" href="../css/header.css"/>`).appendTo("head")
        }
        })
})





