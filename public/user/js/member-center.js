var userInfo=null;
$.ajax({
    type:"get",
    url:"/user/queryUserMessage",
    success:function(res){
        // console.log(res);
       if(res.error&&res.error==400){
           location.href="register.html"
       }
       userInfo=res;
    //    console.log(userInfo);
       var html=template("holl",userInfo);
    //    console.log(html);
       $("#user").html(html);
    }
})

$(function(){

   $("#logout").on("click",function(){
      $.ajax({
          type:"get",
          url:"/user/logout",
          success:function(res){
              if(res.success){
                  location.href="index.html";
              }
          }
      })
   })

   
})
