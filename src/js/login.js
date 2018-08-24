document.addEventListener('DOMContentLoaded',function(){
    
    
    let btnReg = document.querySelector('.btnReg');
    let no = document.querySelector('.no');
    let no2 = document.querySelector('.no2');

    btnReg.onclick = function(e){
        e = e || window.event;

        let username = document.querySelector('#username').value;

        if(!/^[a-z][a-z0-9_\-]{5,19}$/i.test(username)){
            console.log()
            no.innerHTML = '用户名不合法';

            return false;
        }
        let password = document.querySelector('#password').value;
        if(!/^[^\s]{6,20}$/i.test(password)){
            no2.innerHTML = '密码不合法';
            return false;
        }
    }



});