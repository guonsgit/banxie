$(function(){
    //  alert("123415")
$.ajax({
    url:"http://127.0.0.1:8080/cart_no",
    post:"get",
    dataType:"json",
    success:function(result){
      console.log(result);
      var cart_no=result.code;
    //   console.log(cart_no);
      if(cart_no==-1){//如果页面返回结果是1- 就加载页面让空页面显示
        //否则就显示 购物车页面
        window.open("vans_shopcar.html")
        var htmlstr=`<div class="shopcar"> 
        <h2 class="font-weight-bold mt-5">我的购物车</h2>
        <p>
            <h4 class="sorry_txt ">抱歉！您的购物车内暂时没有任何商品</h4>
        </p>
        <span class="text_small">您可以继续购物，或者查看您的订单：</span>
        <div>
            <a class="my_look mt-3" href="">
                <span class="my_look1 mr-1">选购商品</span>
                <span class="my_look2">查看订单</span>
            </a>
        </div>
        <div class="square_1">
            <div class="square"></div>
            <div class="like">猜你喜欢</div>
        </div>
    </div>`
    $(".shop").append(htmlstr);
        //   alert("232")
        console.log(cart_no)
      }else{
        window.open("vans_shopcar.html")
        $(`<link rel="stylesheet" href="../css/vans_shopcar_no.css"/>`).appendTo("head")
        var html=`<div class="shoppingcar">
        <div class="title">
              <h2>我的购物车</h2>
        </div>
          <div>
              <table>
                  <thead>
                     <tr>
                         <th class="checkbox">
                             <input type="checkbox">全选
                         </th>
                         <th colspan="2">已选商品</th>
                         <th>数量</th>
                         <th>原价</th>
                         <th>优惠</th>
                         <th>总计</th>
                         <th>操作</th>
                     </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                           <input type="checkbox">全选
                          </td>
                          <td>
                      
                              <div class="img_width" >
                                  <img src="../img/shopcar.jpg" alt="">
                              </div>
                              
                          </td>
                          <td >
                              <div>
                                      <div class="size">
                                              <h6>男女款连帽卫衣</h6>
                                          </div>
                                          <div class="black">
                                              黑色/XS
                                          </div>
                                          <div class="bianji">
                                              <a href="">编辑</a>
                                          </div>
                              </div>
                          </td>
                          <td class="count">
                              <div>
                              <button>-</button>
                              <input type="text">
                              <button>+</button>
                          </div>
                          </td>
                          <td class="price">
                              <div>￥520.00</div>
                          </td>
                          <td class="price">
                              <div>￥0.00</div>
                          </td>
                          <td class="zongji">
                              <div>￥520.00</div>
                          </td>
                          <td class="caozuo">  
                            <a href="">移入收藏夹</a>
                            <span>/</span>
                            <a href="">移除</a>
                          </td>
                      </tr>
                      <tr>
                          <td colspan="7">
                             <span> 总价:520.00</span>
                          </td>
                          <td></td>
                      </tr>
                  </tbody>
                  <tfoot>
                      <tr>
                          <td colspan="7">继续购物</td>
                          <td>下单结算</td>
                      </tr>
                  </tfoot>
              </table>
          </div>
    </div>`
    $(".shop").append(html)
      }     
    }
})
})

