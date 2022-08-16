<?php

$data = json_decode(file_get_contents('php://input'), true);

$connect = connect();

$stmt = $connect->prepare('UPDATE users SET name = :name WHERE id = :id');
$stmt->bindValue(':id', $data['id']);
$stmt->bindValue(':name', $data['name']);

$updated = $stmt->execute();

if ($updated) {
    echo json_encode('updated');
} else {
    http_response_code(404);
}
