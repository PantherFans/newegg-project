document.addEventListener('DOMContentLoaded',()=>{
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let btnReg = document.querySelector('.btnReg');
    let no1 = document.querySelector('.no');
    let no2 = document.querySelector('.no2');

    let status = [200,304];


    let isok = false;

    username.focus();

    //注册
    btnReg.onclick = ()=>{
        if(!isok){
            return false;
        }

        //获取用户名/密码
        let _username = username.value;
        var _password = password.value;

        if(_username == ''){
            no1.innerText = '用户名不能为空！！！';
            username.focus();

            return;
        }else if(_password == ''){
           no2.innerText = '密码不能为空';
            password.focus();
            return;
        }
        console.log(no1,no2);
        

        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                console.log(xhr.responseText);
            }
        }
        xhr.open('post','../api/reg.php',true);

        //设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        xhr.send(`username=${_username}&password=${_password}`);
        location.href = 'reg.html';
    }

    //验证用户名是否存在
    username.onblur =()=>{
        let _username = username.value;

        let xhr = new XMLHttpRequest();

        if(_username = ''){
            username.nextElementSibling.innerText = '用户名不能为空！！！';
            var cc =  username.nextElementSibling.innerText;
            console.log(cc);
            username.focus();
            return
        }

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
        xhr.open('get','../api/check_username.php?username='+_username,true);
        xhr.send();
    } 
});