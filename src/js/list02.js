jQuery(function($){

    //实例化一个异步请求对象
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){

        if(xhr.status === 200){
            //确认数据接收完毕
            //在此获取数据：responseText
            // var data = JSON.parse(xhr.responseText);
            // console.log(xhr.responseText);

            var datalist = JSON.parse(xhr.responseText);

            // console.log(data);

            let data = datalist.slice(0);

            //获取元素
            var price = document.querySelector('#price');
            var date = document.querySelector('#date');   
            var goodslist = document.querySelector('.goodslist');



            goodslist.innerHTML = data.map(function(item,idx){
                return `<li class="pro1" data-id=${item.id}>
                    <img class="img1" src="../img/${item.imgurl}"/>
                    <h4 class="name">${item.title}</h4> 
                    <p class="qty">销量：${item.salesqty}</p>
                    <p class="jiage">￥${item.price}</p>
                </li>`
            }).join('\n');


            //价格排序
           var qty = document.querySelector('#qty');
           var dprice = document.querySelector('#d_price');
           var uprice = document.querySelector('#uprice');


           // var arr = []

           uprice.onclick = function(){
                var xhr = new XMLHttpRequest();

                xhr.onload = function(){
                    if(xhr.status === 200){
                        //确认数据接收完毕
                        //在此获取数据：responseText
                        // var data = JSON.parse(xhr.responseText);
                        // console.log(xhr.responseText);
                        var goodslist = document.querySelector('.goodslist');
                        var datalist = JSON.parse(xhr.responseText);
                        console.log(datalist);

                        goodslist.innerHTML = '';
                        goodslist.innerHTML = datalist.map(function(item,idx){
                            return `<li class="pro1" data-id=${item.id}>
                                <img class="img1" src="../img/${item.imgurl}"/>
                                <h4 class="name">${item.title}</h4> 
                                <p class="qty">销量：${item.salesqty}</p>
                                <p class="jiage">￥${item.price}</p>
                            </li>`
                        }).join('\n');

                }
            }

                    //配置参数，建立与服务器连接
                    xhr.open('get','../api/goodsort.php',true);


                    //发起请求
                    xhr.send();
           }
        }

            
       
       //传参到详情页    
        let gdli = goodslist.children;
        
             for(var i=0;i<gdli.length;i++){
                gdli[i].onclick = function(e){
                    // console.log(e.target.parentNode)
                let id = e.target.parentNode.getAttribute('data-id');
                
                     
                location.href = 'goodsdetail.html?id=' + id;


                }
             }
       



        
    }

    //配置参数，建立与服务器连接
    xhr.open('get','../api/list.php',true);


    //发起请求
    xhr.send();
});