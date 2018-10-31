$(function(){

	$.ajax({
		type:"get",
		url:"/employee/checkRootLogin",
		success:function(res){
			if(res.error&&res.error==400){
				location.href="login.html"
			}
		}
	})

	$('#loginOut').click(function(){
		$.ajax({
			type:"get",
			url:"/employee/employeeLogout",
			success:function(res){
				if(res.success){
					location.href="login.html";
				}
			}
		});
	})
});