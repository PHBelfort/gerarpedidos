<?php
session_start();

// Defina um array associativo com informações de autenticação
$users = array(
    "Henrique" => "111",
    "Paulo" => "222",
    "João M" => "333"
);

// Verifique se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Verifique se as credenciais estão corretas
    if (isset($users[$username]) && $users[$username] === $password) {
        // Autenticação bem-sucedida - defina uma variável de sessão para indicar que o usuário está autenticado
        $_SESSION["authenticated"] = true;
        $_SESSION["username"] = $username;
        header("Location: dashboard.php"); // Redirecione para a página de painel após o login
        exit;
    } else {
        echo "Credenciais inválidas. Tente novamente.";
    }
}
?>