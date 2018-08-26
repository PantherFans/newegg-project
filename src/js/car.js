document.addEventListener('DOMContentLoaded',()=>{
    //实例化一个异步请求对象
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){

        if(xhr.status === 200){
            //确认数据接收完毕
            //在此获取数据：responseText
            // var data = JSON.parse(xhr.responseText);
            // console.log(xhr.responseText);

            var datalist = JSON.parse(xhr.responseText);

            let data = datalist.slice(0);
            
            // console.log(data);


            render();

            var oCarList = document.querySelector('.carList');
            var oSubPrice = oCarList.nextElementSibling;
            var btnClear = document.querySelector('#btnClear');

            // 删除单个商品
        // * 找出删除的商品 -> 从数组中移除
            oCarList.onclick = function(e){
                e = e || window.event;

                var target = e.target || e.srcElement;

                // 判断是否点击了按钮
                if(target.className === 'btn-close'){
                    //获取当前li
                    var currentLi = target.parentNode;

                    //获取当前商品的guid
                    var guid = currentLi.getAttribute('data-guid');

                    //找出数组中对应商品并移除
                    for(var i=0;i<carList.length;i++){
                        if(carList[i].guid === guid){
                            carList.splice(i,1);
                            break;
                        }
                    }

                    render();
                }
            }
            function render(){
                var carList = document.querySelector('.carList');

                var total = 0;

                carList.innerHTML = data.map(function(item,idx){
                    return `<li class="pro1" data-id=${item.id}>
                        <img class="img1" src="../img/${item.imgurl}"/>
                        <h4 class="name">${item.title}</h4> 
                        <p class="price">价格：<span>${item.price}</span>&times;${item.qty}</p>
                        <span class="btn-close">&times;</span>
                    </li>`;
                }).join('\n');

                // 写入总价
            oSubPrice.innerHTML = total.toFixed(2);
            }

        }

    }

    //配置参数，建立与服务器连接
    xhr.open('get','../api/addcar2.php',true);


    //发起请求
    xhr.send();
});