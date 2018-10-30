$(function () {
    var isEdit = Number(getParamsByUrl(location.href, 'isEdit'));
    console.log(isEdit);
    if(isEdit){
         if(localStorage.getItem("Adress")){
        // console.log(localStorage.getItem("Adress"));
        var add=JSON.parse(localStorage.getItem("Adress"));
        console.log(add);
        // console.log(add.recipients);
        var html = template("app",add);
        // console.log(html);
        $("#form").html(html);
        $("h1").html("编辑收货地址");
      }
    }else{
        var html = template("app",{});
		$('#form').html(html);
    }


    // 创建picker选择器
   
    var picker = new mui.PopPicker({ layer: 3 });
    picker.setData(cityData);

    $("#reselt").on("click", function () {
         // 三级联动的初始化
        picker.show(function (selectItems) {
            $("#reselt").val(selectItems[0].text + selectItems[1].text + selectItems[2].text)
        });
    });

    // 添加收货地址
    $("#btn").on("click", function () {
        var recipients = $("#recipients").val().trim();
        var postcode = $("#postcode").val().trim();
        var reselt = $("#reselt").val().trim();
        var addressDetail = $("#addressDetail").val().trim();
        if (!recipients) {
            mui.toast("请输入用户名");
            return;
        }
        if (!postcode) {
            mui.toast("未输入邮编");
            return;
        }
        if (!reselt) {
            mui.toast("请选择省市区");
            return;
        }
        if (!addressDetail) {
            mui.toast("请输入详细地址");
            return;
        }

        var data = {
			address: reselt,
			addressDetail: addressDetail,
			recipients: recipients,
			postcode: postcode
		};

		if(isEdit){

			// 编辑操作
			var url = "/address/updateAddress";

            data.id = add.id;
            

		}else {

			// 添加操作
			var url = "/address/addAddress";
		}
        
           $.ajax({
               type:"post",
               url:url,
               data:data,
               success:function(res){
                    if(res.success){
                        if(isEdit){
                            mui.toast("地址修改成功");
                        }else{
                            mui.toast("地址添加成功");
                        }
                        location.href="adress.html";
                    }
               }
           })
    })
 
})