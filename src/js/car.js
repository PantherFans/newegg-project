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

            
            // 清空购物车
            // 删除goodslist这个cookie
            btnClear.onclick = function(e){
                // 清空cookie
                // data.remove('carList');

                // 清空goodslist数组
                 var carList = document.querySelector('.carList');
                 carList.innerHTML = [];
                console.log(carList)
                     
                // render();
             

                e.preventDefault();

                // 手动刷新页面
                // location.reload()
            }


            // 删除单个商品
        // * 找出删除的商品 -> 从数组中移除
            oCarList.onclick = function(e){
                e = e || window.event;
                var carList = document.querySelector('.carList');
                var target = e.target || e.srcElement;
                
                     
                // 判断是否点击了按钮
                if(target.className === 'btn-close'){
                    // //获取当前li
                    var currentLi = target.parentNode;
                    var carList = document.querySelector('.carList');

                    //获取当前商品的guid
                    var guid = currentLi.getAttribute('data-guid');

                    

                    // render();
                    console.log(currentLi);
                    carList.removeChild(currentLi);
                         
                }
            }
            function render(){
                var carList = document.querySelector('.carList');
                var oCarList = document.querySelector('.carList');
                var oSubPrice = oCarList.nextElementSibling;
                var btnClear = document.querySelector('#btnClear');

                var total = 0;

                carList.innerHTML = data.map(function(item,idx){

                    total += item.price * item.qty;
                    return `<li class="pro1" data-guid=${item.id}>
                        <img class="img1" src="../img/${item.imgurl}"/>
                        <h4 class="name">${item.title}</h4> 
                        <p class="price">价格：<span>${item.price}</span>&times;${item.qty}</p>
                        <span class="btn-close">&times;</span>
                    </li>`;
                }).join('\n');

                // 写入总价
            oSubPrice.innerHTML = total.toFixed(2);
            // oSubPrice.innerHTML = '123';
            
            // console.log(oSubPrice);
                 
            }

        }

    }

    //配置参数，建立与服务器连接
    xhr.open('get','../api/addcar2.php',true);


    //发起请求
    xhr.send();
});