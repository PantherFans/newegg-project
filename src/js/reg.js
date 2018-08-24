document.addEventListener('DOMContentLoaded',()=>{
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let btnReg = document.querySelector('.btnReg');
    let no = document.querySelector('.no');
    let no2 = document.querySelector('.no2');
    let no3 = document.querySelector('.no3');
    let code = document.querySelector('#code');
    let showCode = document.querySelector('.showcode');
    let dui = document.querySelector('.dui');
    let cuo = document.querySelector('.cuo');
    let form = document.querySelector('.form');

    let status = [200,304];


    let isok = false;

    username.focus();


        var sc = cs(0,9,4);

       showCode.onclick = function(){
            sc = cs(0,9,4);
            showCode.innerHTML = sc[0];
          
       }
   


      
   
        // console.log( typeof(res))
        
             
        showCode.innerHTML= sc[0];
        var aa= showCode.innerHTML;
        console.log(aa)

        code.onfocus = function(){
             var timest = setInterval(function yzm(){
                     var _code = code.value;
                    
                    if(_code ==Number(sc[1])){
                        dui.style.display = 'block';
                        cuo.style.display = 'none';
                        clearInterval(timest)
                        console.log(_code)
                          return;    
                        
                    }else{
                        cuo.style.display = 'block';
                        dui.style.display = 'none';
                        console.log(_code)
                        
                         return;
                    }
                    // console.log(res);
                },3000);
        }

       // code.onclick =function(){ console.log('kkk')
          
      
              
          

                
       //       };  
        
        //获取用户名/密码
        onkeyup = function(e){

            var key = e.keyCode || e.which; 
            console.log('use');
            let _username = username.value;
            var _password = password.value;
            var _code = code.value;
         
                 

            if(_username == ''){
                no.innerText = '用户名不能为空！！！';
                username.focus();

                return;
            }else if(_password == ''){
               no2.innerText = '密码不能为空！！！';
                // password.focus();
                return;
            }
           
            
            if(!/^[a-z][a-z0-9_\-]{5,19}$/i.test(_username)){
              
                no.innerHTML = '用户名不合法';

                return false;
            }
            // let password = document.querySelector('#password').value;
            if(!/^[^\s]{6,20}$/i.test(_password)){
                no2.innerHTML = '密码不合法';
                return false;
            }
        }
        
        

        // console.log(res)

        btnReg.onclick = ()=>{
        if(!isok){
            return false;
        }

        
        let _username = username.value;
        var _password = password.value;

        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                console.log(xhr.responseText);location.href = '../html/login.html';
            }
        }
        xhr.open('post','../api/reg.php',true);

        //设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        xhr.send(`username=${_username}&password=${_password}`);
        
    }

    //验证用户名是否存在
    username.onblur =()=>{
        let _username = username.value;
  
        let xhr = new XMLHttpRequest();

        // if(_username === ''){
        //     username.nextElementSibling.innerText = '用户名不能为空！！！';
        //     var cc =  username.nextElementSibling.innerText;
        //     console.log(cc);
        //     username.focus();
        //     // return
        // }
        // console.log(_username)

        // password.onfocus =()=>{
        //     let _password = password.value;
        //     if(_password == ''){
        //         password.nextElementSibling.innerText = '密码不能为空!!!';
        //         // password.focus();
        //         return;
                
        //     }
        //      username.nextElementSibling.innerText = '';
        // }



        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                var formGroup = username.parentNode;

                if(xhr.responseText === 'yes'){
                    isok = true;

                    //成功添加has-success类
                    formGroup.classList.remove('has-error');
                    formGroup.classList.add('has-success');
                    username.nextElementSibling.innerText = '';
                }else if(xhr.responseText === 'no'){
                    isok = false;
                    formGroup.classList.remove('has-success');
                    formGroup.classList.add('has-error');
                    username.nextElementSibling.innerText = '用户名已存在';
                    username.focus();
                } 
            }
        }
        console.log(_username)
        xhr.open('get','../api/check_username.php?username='+_username,true);
        xhr.send();
    } 
});