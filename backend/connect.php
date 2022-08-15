<?php

function connect() {
    return new PDO('mysql:host=localhost;dbname=javascript_puro_dinamico','root', '', [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
    ]);
}
