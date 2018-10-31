$(function(){
    $.ajax({
        type:"get",
        url:"/user/queryUser",
        data:{
            page:1,
            pageSize:10
        },
        success:function(res){
            console.log(res);
          var html=template("tabmit",res);
        //   console.log(html);
          $("#table-how").html(html);
        }
    });

    $(".body").on("click",".btn",function(){
        var id=$(this).data("id");
        // console.log(id);
        var isDelete=parseInt($(this).data("delete"));
        console.log(isDelete);
        $.ajax({
            type:"post",
            url:"/user/updateUser",
            data:{
                id:id,
                isDelete:isDelete?0:1
            },
            success:function(res){
             if(res.success){
                location.reload();
             }else{
                if(res.error){
                    alert(res.message);
                }
             }
            }
        })
    })
})