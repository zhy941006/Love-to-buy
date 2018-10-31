$(function(){
    $("#btn-how").on("click",function(){
        var username=$("#username").val().trim();
        var password=$("#password").val().trim();
        $.ajax({
            type:"post",
            url:"/employee/employeeLogin",
            data:{
                username:username,
                password:password
            },
            success:function(res){
                if(res.success){
                    location.href="user.html";
                }
            }
        })
    })
})