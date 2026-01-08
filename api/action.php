<?php

    header("Access-Control-Allow-Origin:* ")
    header("Access-Control-Allow-Headers:* ")
    header("Access-Control-Allow-Methods:* ")

    $connect = new PDO("mysql:host=srv1535.hstgr.io; dbname:u707743927_contacts;", "u707743927_jcornelio", "33n+=l1iLL")

    $method = $_SERVER['REQUEST_METHOD']

    if($method === 'GET'){
        $query = "SELECT * FROM u707743927_contacts.users ORDER BY name DESC";

        $result = $connect->query($query, PDO::FETCH_ASSOC);

        $data = array();

        foreach($result as $row){
            $data[] = $row;
        }

        echo json_encode($data)
    }
?>