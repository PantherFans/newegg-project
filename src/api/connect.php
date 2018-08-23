<?php
    
    //配置参数
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = '1804';

     // 创建连接（实例化）
    $conn = new mysqli($servername, $username, $password, $dbname);

    //创建连接(实例化)
    if($conn->connect_error) {
        //输出信息并结束连接
        die("连接失败：" . $conn->connect_error);
    }
?>