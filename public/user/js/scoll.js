$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    
//   获取一级目录数据
    $.ajax({
        type:'get',
        url:"/category/queryTopCategory",
        success:function(result){
            console.log(result);
           var html=template("scoll-tem",result);
           $(".lintin").html(html);
           if(result.rows.length){
               $(".lintin").find("a").eq(0).addClass("active");
              
               var id = result.rows[0].id;
                // 页面打开马上加载第一个目录下的二级目录数据
               $.ajax({
                type:"get",
                url:"/category/querySecondCategory",
                data:{
                   id:id
                },
                success:function(result){
                   var html=template("show",result);
                   $(".hell").html(html);
                }
            })
           
           }
        }
    });

    // 动态获取的a需要用on
    $(".lintin").on("click","a",function(){
        // 获取点击a的自定义id
        var id=$(this).data("id");
       
        $(this).addClass("active").siblings("a").removeClass("active");
//   获取二级目录数据
        $.ajax({
            type:"get",
            url:"/category/querySecondCategory",
            data:{
               id:id
            },
            success:function(result){
               var html=template("show",result);
               $(".hell").html(html);
            }
        })
    })
})