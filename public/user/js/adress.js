$(function(){
  $.ajax({
    type:"get",
    url:"/address/queryAddress",
    success:function(res){
      // console.log(res);
      adress=res;
      var html=template("adress",res);
      // console.log(html);
      $("#hellf").html(html);
    }
  })
// 删除收货地址
  $("#hellf").on("click","#delet",function(){
    var id=$(this).data("id");
    // 回调函数的值随便取
    var li=this.parentNode.parentNode;
     mui.confirm("确认要删除吗？",function(rowhart){
        if(rowhart.index==1){
          $.ajax({
            type:"post",
            url:"/address/deleteAddress",
            data:{
              id:id
            },
            success:function(res){
             location.reload();
            }
          });
        }else{
          mui.swipeoutClose(li);
        }
     })
  });

  // 编辑收货地址
  $("#hellf").on("click","#bianji",function(){
     var id=$(this).data("id");
      for(var i=0;i<adress.length;i++){
        if(adress[i].id==id){
          localStorage.setItem("Adress",JSON.stringify(adress[i]));
          break;
        }
        
      }
      location.href="addAddress.html?isEdit=1";
  });
});
