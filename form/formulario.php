<?php

// Recoger datos del formulario
if (isset($_POST)) {

    // Recoger datos del formulario
    $nombreApellido = $_POST['nombreApellido'];
    $email = trim($_POST['email']);
    $mensaje = $_POST['mensaje'];
    
    // Envío de mail
    mail("joaquintravia@hotmail.com", "Consulta de " . $email, $mensaje, "From: $email\nContent-Type: text/html; charset=utf-8");
}

// Redirección y mensaje de mail de enviado
header('Location: ../index.html');