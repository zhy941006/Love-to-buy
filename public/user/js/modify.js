$(function(){
    $("#modify-btn").on("click",function(){
        var oldPassword=$("#oldPassword").val().trim();
        var newPassword=$("#newPassword").val().trim();
        var password=$("#password").val().trim();
        var vCode=$("#vCode").val().trim();
        if(newPassword!=password){
         mui.toast("两次输入的密不一致");
        }
      $.ajax({
          type:"post",
          url:"/user/updatePassword",
          data:{
            oldPassword:oldPassword,
            newPassword:newPassword,
            vCode:vCode
          },
          success:function(res){
              console.log(res);
                if(res.success){
                    mui.toast("修改密码成功");
                    location.href="register.html";
                }
          }

      });
    })

    // 获取验证码
    $("#getCheckCode").on("click",function(){
        $.ajax({
            Type:"get",
            url: '/user/vCodeForUpdatePassword',
           success:function(res){
               console.log(res.vCode);
           }
        });
    })
})