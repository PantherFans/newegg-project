<?php

    
    include 'connect.php';
   $id = isset($_GET['id']) ? $_GET['id'] : null;
   $num = isset($_GET['num']) ? $_GET['num'] : null;
    
    // 查找数据库中是否存在同名用户
     // $sql = "insert into username(name,password) values('$username','$password')";

    // $sql = 'select * from car';

     // 编写sql语句 
    $sql2 = "insert into car(id,title,price,imgurl,qty) select id,title,price,imgurl,'$num' from list where id='$id'";
    // 获取查询结果集
    $result = $conn->query($sql2);


     //编写sql语句 
    $sql = "select * from list";
    
     //把结果输出到前台
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
    $conn->close();

   
    
?>
