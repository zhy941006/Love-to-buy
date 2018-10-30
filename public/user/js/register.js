$(function(){
    $("#btn-sull").on("click",function(){
      var userName=$(".uName").val().trim();
      var password=$(".now-pass").val().trim();
      console.log(userName);
      if(!userName){
        mui.toast("请输入用户名");
        return;
      }
     $.ajax({
         type:"post",
        url:"/user/login",
        data:{
            username:userName,
            password:password
        },
        success:function(res){
            console.log(res);
            mui.toast("登录成功");
           location.href="member-center.html"
        }
     })
    })

    $(".zhuce").on("click",function(){
        location.href="user.html";
    });
})
    