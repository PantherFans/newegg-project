document.addEventListener('DOMContentLoaded',()=>{
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let btnReg = document.querySelector('.btnReg');
    let no1 = document.querySelector('.no');
    let no2 = document.querySelector('.no2');
    let no3 = document.querySelector('.no3');
    let code = document.querySelector('#code');
    let showCode = document.querySelector('.showcode');

    let status = [200,304];


    let isok = false;

    username.focus();

   


       showCode.onclick = function(){
            showCode.innerHTML = cs(0,9,4);
          
       }
        showCode.innerHTML=cs(0,9,4); 

        btnReg.onclick = ()=>{
        if(!isok){
            return false;
        }

        //获取用户名/密码
        let _username = username.value;
        var _password = password.value;
        var _code = code.value;
        console.log(_code)
             

        if(_username == ''){
            no1.innerText = '用户名不能为空！！！';
            username.focus();

            return;
        }else if(_password == ''){
           no2.innerText = '密码不能为空！！！';
            password.focus();
            return;
        }
        else if(_code == ''){
            no3.innerText = '验证码不能为空！！！';
            code.focus();
            return;
        }
        // showCode.innerHTML = getCode;
        // console.log(getCode);

        

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

        if(_username === ''){
            username.nextElementSibling.innerText = '用户名不能为空！！！';
            var cc =  username.nextElementSibling.innerText;
            console.log(cc);
            username.focus();
            // return
        }
        console.log(_username)

        password.onfocus =()=>{
            let _password = password.value;
            if(_password == ''){
                password.nextElementSibling.innerText = '密码不能为空!!!';
                password.focus();
                return;
            }else{
                password.nextElementSibling.innerText = '';
            }
        }



        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                var formGroup = username.parentNode;

                if(xhr.responseText === 'yes'){
                    isok = true;

                    //成功添加has-success类
                    formGroup.classList.remove('has-error');
                    formGroup.classList.add('has-success','glyphicon-ok');
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