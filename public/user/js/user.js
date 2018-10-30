$(function(){
    $("#btns").on("click",function(){
       var userName=$(".userName").val().trim();
       var password=$(".password-dell").val();
       var nowPassword=$(".que-password").val();
       var Verification=$(".Verification").val();
       var iphone=$(".iphone").val();
       if(!userName){
        mui.toast("请输入用户名");
        return;
       }
       if(iphone.length<11){
        mui.toast("请输入正确的手机号");
        return;
       }
       if(nowPassword!=password){
        mui.toast("两次输入的密码不一致");
        return;
       }
     $.ajax({
        type:'post',
        url:"/user/register",
        data:{
            username:userName,
            password:password,
            mobile:iphone,
            vCode:Verification
        },
        success:function(res){
            mui.toast("恭喜！注册成功");
            setTimeout(function(){
                location.href="register.html";
            },1000)
        }
     });
    })
    $("#bd").on("click",function(){
        $.ajax({
            Type:"get",
            url:"/user/vCode",
           success:function(res){
               console.log(res.vCode);
           }
        });
    })

    $(".bbt").on("click",function(){
        location.href="register.html";
    })
})