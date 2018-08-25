<?php
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET');
    header('Accees-Control-Request-Headers: accpet,content-type');
  
    // 链接数据库
     function connect(){
        $servername='localhost';
        $serverAccount='root';
        $serverPwd='root';
        $database='1804';

        $conn=new mysqli($servername,$serverAccount,$serverPwd,$database);
 
        // 判断是否连接出错
        if($conn->connect_error){
            echo "error";
            return null;
        }else{
            // echo "ok";
             return $conn;
        }
    }

?>