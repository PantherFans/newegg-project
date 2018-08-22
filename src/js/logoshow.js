document.addEventListener('DOMContentLoaded',function(){
            var haitaob = document.querySelector('.haitaob');
            
            var lis = haitaob.children;
            var currenthaitaob = 0;

            // var arr = ['差评', '不推荐', '一般', '推荐', '强力推荐'];

            // 鼠标移入高亮星星
            haitaob.onmouseover = function(e){
                if(e.target.tagName.toLowerCase() === 'li'){
                    var current = e.target
                    var currentIdx;

                    // 获取移入星星的索引值
                    for(var i=0;i<lis.length;i++){
                        if(lis[i] === current){
                            currentIdx = i;
                            break;
                        }
                    }

                    for(var i=0;i<lis.length;i++){
                        // 小于等于currentIdx高亮
                        if(i<=currentIdx){
                            lis[i].classList.add('active1');
                        }else{
                            // 否则去除高亮
                            lis[i].classList.remove('active1');
                        }
                    }
                }
            }

            haitaob.onmouseout = function(){
                for(var i=0;i<lis.length;i++){
                    if(i>currenthaitaob){
                        lis[i].classList.remove('active1');
                    }else{
                        lis[i].classList.add('active1');
                    }
                }
            }

            // 点击li显示对应信息
            haitaob.onclick = function(e){
                if(e.target.tagName.toLowerCase() === 'li'){
                    for(var i=0;i<haitaob.children.length;i++){
                        if(e.target === haitaob.children[i]){
                            info.innerHTML = arr[i];
                            currenthaitaob = i;
                            break;
                        }
                    }
                }
            }
        });