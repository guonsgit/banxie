
$(function(){
    var i=1 
    load(i)

  function load(pno){
  $.ajax({
    url:`http://127.0.0.1:8080/productList?pno=${pno}&ps=3`,
    post:"get",
    dataType:"json",
    success:function(result){
      console.log(result);
     var product=result.data
    //    var img_md=product[i].md
    //    console.log(product[i].md) 
    var htmlstr="";
      for(var i=0;i<product.length;i++){
       htmlstr+=`<li>
         <div class="pic_items">
                <a href="">
                    <img  class="pic_sm" src="${product[i].sm}" alt="">
                    <img class="pic_md" src="${product[i].md}" alt="">
                    <a class="kuaisu" href="">快速购买</a>
                </a>
            </div>
            <h5>${product[i].title}</h5>
            <p>${product[i].price}</p>
        </li>`
     
      }
      $(".right_xie>ul").append(htmlstr)
    //   console.log(htmlstr)
    }
  })
  }
  $("#gd").on("click",function(){
      i++
      console.log(i)
     load(i);
  })
}); 