<?php
session_start();

// Encerre a sessão
session_destroy();

// Redirecione de volta para a página de login
header("Location: login.php");
?>
