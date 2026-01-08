<?php
    $conn = new mysqli('srv1535.hstgr.io', 'u707743927_jcornelio', '33n+=l1iLL', 'u707743927_contacts')

    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
    }
    else {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $sql = "INSERT INTO users(name, email, message) VALUES('$name', '$email', '$message')"

        $res = mysqli_query($conn, $sql)

        if($res){
            echo "SUCCESS"
        }else{
            echo "Error"
        }

        $conn->close()
    }
?>