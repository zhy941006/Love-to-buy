var page=1;
var keyword = getParamsByUrl(location.href, 'keyword');
$(function(){
        Data();
})


function getParamsByUrl(url,name){
    var url=location.href;
    var params = url.substr(url.indexOf('?')+1);
    var users=params.split("&");
    for(var i=0;i<users.length;i++){
        var cuttrn=users[i].split("=");
    }
   if(cuttrn[0]==name){
       return cuttrn[1];
   }
   return null;
}

function Data(){
    This=this;
    $.ajax({
        type:"get",
        url:"/product/queryProduct",
        data:{
          page:1,
          pageSize:3,
          proName:keyword
       
        },
        success:function(res){
            console.log(res);
            if(res.data.length>0){
                var html=template("search",res);
                $(".product-s").html(html);
              
            }
        }
    });
}