<?php

$connect = connect();
$query = $connect->query("SELECT id, name FROM users");

echo json_encode($query->fetchAll());
