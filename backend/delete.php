<?php

$data = json_decode(file_get_contents('php://input'), true);

$connect = connect();

$stmt = $connect->prepare('DELETE FROM users WHERE id = :id');
$stmt->bindValue(':id', $data['id']);

$deleted = $stmt->execute();

if ($deleted) {
    echo json_encode('deleted');
} else {
    http_response_code(404);
}
