document.addEventListener('DOMContentLoaded',()=>{

    function GetRequest() {   
       var url = location.search; //获取url中"?"符后的字串   
       var theRequest = new Object();   
       if (url.indexOf("?") != -1) {   
          var str = url.substr(1);   
          strs = str.split("&");   
          for(var i = 0; i < strs.length; i ++) {   
             theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
          }   
       }   
       return theRequest;   
    }
    var a = GetRequest();

    // console.log(a.id);
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(xhr.status === 200){
            //确认数据接收完毕
            //在此获取数据：responseText
            // var data = JSON.parse(xhr.responseText);
            // console.log(xhr.responseText);

            var datalist = JSON.parse(xhr.responseText);
            // console.log(datalist);

            //获取要替换的元素
            var chanpin = document.querySelector('.chanpin');
            var dacp = document.querySelector('.dacp');
            var biaoti = document.querySelector('.biaoti');
            var pr = document.querySelector('.pr');

             dacp.src = '../img/'+datalist[0].imgurl;

             // console.log(dacp)
                  

             // console.log(datalist[0].title)
                  

             biaoti.innerText = `${datalist[0].title}`;

             pr.innerText = `${datalist[0].price}`;

     

    }
}

        //配置参数，建立与服务器连接
        xhr.open('get','../api/goodsdetail.php?id='+a.id,true);


        //发起请求
        xhr.send();

        var buy = document.querySelector('.goumai');
        var add = document.querySelector('.jiaru');
        var num = document.querySelector('.num');
        var less = document.querySelector('.less');
        var ga = document.querySelector('.ga');

        var _num = num.value*1;

        // console.log(_num)
        less.onclick = function(){
            _num-=1;
            num.value=_num;
            // console.log(_num)
                 
            
                 
        }

        ga.onclick = function(){
            _num+=1;
            num.value=_num;
            // console.log(_num)
        }

        add.onclick = function(){
            var xhr = new XMLHttpRequest();

            xhr.onload = function(){
                if(xhr.status === 200){
                    //确认数据接收完毕
                    //在此获取数据：responseText
                    // var data = JSON.parse(xhr.responseText);
                    // console.log(xhr.responseText);

                    var datalist = JSON.parse(xhr.responseText);

                    console.log(datalist);
                         
                }

            }


             //配置参数，建立与服务器连接
        var _num = num.value*1;
        xhr.open('get','../api/addcar.php?id='+a.id+'&num='+_num,true);

        
        //发起请求
        xhr.send();

        }


});