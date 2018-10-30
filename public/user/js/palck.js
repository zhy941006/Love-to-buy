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