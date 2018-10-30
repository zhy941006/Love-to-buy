$(function(){
    var key = [];
    $(".ipt").on("tap",function(){
       var keywar=$(this).siblings("input").val();
       if(keywar){
        key.unshift(keywar);
        localStorage.setItem('keyArr', JSON.stringify(key));
        location.href="search-result.html?keyhold="+keywar;
       }else{
           alert("请输入要搜索的商品关键字");
           return;
       }
    })

    if(localStorage.getItem("keyArr")){
        key=JSON.parse(localStorage.getItem("keyArr"));
        console.log(key);
        var html=template("wordkey",{result:key});
        console.log(html);
        $("#history-box").html(html);
    }

    $(".button").on("click",function(){
        $("#history-box").html("");
        localStorage.removeItem("keyAll");
    })

})

$(function() {
    //存储关键字的数组
    var key = [];
    //点击按钮获取文本框中的内容
    $('.ipt').on('tap', function() {
       var keyword=$(this).siblings("input").val();
        // console.log(keyword);
        if (!keyword) {
            alert('请输入关键字');
            return;
        } else {
            //将关键字传到数组中
            key.unshift(keyword);
            // console.log(key);
            //将数组中的数据转换为字符串，并且存储在本地
            localStorage.setItem('keyArr', JSON.stringify(key));
            // 跳转到详细页
            // location.href = "sarchList.html?keyword=" + keyword;
        }
    })

    if (localStorage.getItem('keyArr')) {
        //获取本地的数据
        key = JSON.parse(localStorage.getItem('keyArr'));
        console.log(key);
        var html = template('wordkey', { result: key });
        $('#history-box').html(html);
    }


    //点击按钮清除历史
    $('.button').on('click', function() {
        $("#history-box").html("");
        localStorage.removeItem('keyArr');
    })
})


