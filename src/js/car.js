document.addEventListener('DOMContentLoaded',()=>{
    //实例化一个异步请求对象
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){

        if(xhr.status === 200){
            //确认数据接收完毕
            //在此获取数据：responseText
            // var data = JSON.parse(xhr.responseText);
            // console.log(xhr.responseText);

            var data = JSON.parse(xhr.responseText);
            console.log(data)
        }

    }

    //配置参数，建立与服务器连接
    xhr.open('get','../api/addcar.php',true);


    //发起请求
    xhr.send();
});