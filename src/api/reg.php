<?php
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：用户注册
            * 写入数据库
        所需参数：
            * username
            * password
     */
    
    $username = isset($_POST['username']) ? $_POST['username'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 


    // 查找数据库中是否存在同名用户
    $sql = "insert into username(name,password) values('$username','$password')";

    $conn->set_charset('utf8');
    var_dump($conn);

    // 执行sql语句
    $result = $conn->query($sql);


    if($result){
        echo "success";
    }else{
        echo "fail";
    }

?>