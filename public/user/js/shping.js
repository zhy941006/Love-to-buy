$(function(){
   var num=0;

   var footage=null;

   //    产品id
   var productId=0;
   var id=Number(getParamsByUrl(location.href,"id"));
   if(id){
    $.ajax({
        type:"get",
        url:"/product/queryProductDetail",
        data:{
            id:id
        },
        success:function(res){
            // 产品id
            productId=res.id; 

            // 库存数量
            number=res.num;
            Number=res.num;
          var html=template("shping",res);
          $(".header").html(html)
        }
    })
   }

   $(".header").on("click",".size span",function(){
       $(this).addClass("active").siblings("span").removeClass("active");
      footage=$(this).html();
   })

 
   $(".header").on("click","#l",function(){
        num++;
        if(num>number){
            num=number;
        }
       $("input").val(num);
       Number--;
       if(Number<0){
         Number=0;
       }
       $(".six").html(Number);
       
   })
   $(".header").on("click","#r",function(){
        num--;
        if(num<1){
           num=1;
        }
       $("input").val(num);
        Number++;
        if(Number>number){
          Number=number;
        }
       $(".six").html(Number);
     
 });
//  加入购物车
$(".header").on("click",".botton",function(){
    if(!footage){
        mui.toast("请选择尺码");
        return;
    }
    $.ajax({
        type:"post",
        url:"/cart/addCart",
        data:{
            productId:productId,
            num:number,
            size: footage
        },
        success:function(res){
          
            if(res.success){
                mui.confirm("加入购物成功,确认跳转吗？",function(message){
                   if(message.index==1){
                       location.href="http://www.baidu.com";
                   }
                })
               
            }
        }
    })
})

});