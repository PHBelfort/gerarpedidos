<?php
session_start();

// Verifique se o usuário está autenticado
if (isset($_SESSION["authenticated"]) && $_SESSION["authenticated"] === true) {
    // Recupere o nome de usuário da variável de sessão
    $username = $_SESSION["username"];

    // Defina as configurações dos três usuários
    $users = array(
        "Henrique" => array(
            "username" => "Henrique",
            "role" => "Role de Henrique"
        ),
        "Paulo" => array(
            "username" => "Paulo",
            "role" => "Role de Paulo"
        ),
        "João M" => array(
            "username" => "João M",
            "role" => "Role de João M"
        )
    );

    // Verifique se o usuário autenticado está na lista de usuários
    if (isset($users[$username])) {
        // Recupere as configurações do usuário autenticado
        $userSettings = $users[$username];
        $role = $userSettings["role"];
    } else {
        // Trate o caso em que o usuário autenticado não está na lista de usuários
        echo "Usuário não autorizado.";
        exit();
    }
} else {
    // O usuário não está autenticado, redirecione para a página de login
    header("Location: login.php");
    exit();
}
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RD</title>
        <link rel="icon" href="img/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.17.0/font/bootstrap-icons.css">
</head>

<body>
    <div class="container dashboard-container">
        <div class="main align-items-center">
        <div id="layout">
        <div class="div-controle">
            <!-- Conteúdo da div controle -->
            <div id="data"></div>
            <div class="checkbox-container">
                <label class="checkbox-label">
                    <input type="checkbox" name="terceirizado"> Terceirizado
                </label>
                <label class="checkbox-label">
                    <input type="checkbox" name="normal"> Normal
                </label>  
            </div>
                       
            <!-- Início do formulário -->
            <form id="meuFormulario" method="post" action="registrardadoslayout.php">

                <input type="text" id="nomeCliente" name="nomeCliente" oninput="exibirTexto()" placeholder="Nome do Cliente">
                
                <div id="esquerda" onpaste="pasteImage(event)" enctype="multipart/form-data" tabindex="0">
                    <p id="text-icon-img">Cole ou arraste a imagem</p><br>
                    <img id="icon-img" src="img/icon_img.svg">
                    
                </div>
                <div class="dropdown-container">
                    <label for="artefinalSelect"></label>
                    <select id="artefinalSelect" name="artefinalSelect" class="rotated">
                        <option value="<?php echo $username; ?>"><?php echo $username; ?></option>
                    </select>
                </div>
                
                <!-- Adicione um botão de envio -->
                <div class="button-container">
                    <a href="layoutsGerados.html" class="layouts-button">Layouts</a>
                    <a href="logout.php"" class="layouts-button">Sair</a>
                </div>   
            </form> <!-- Fim do formulário -->
        </div>

        <div class="div-producao">
            <!-- Conteúdo da div produção -->
            <div id="dataProdu"></div>
            <div class="checkbox-container">
                <label class="checkbox-label-Prod">
                    <input type="checkbox" name="terceirizadoProd"> Terceirizado
                </label>
                <label class="checkbox-label-Prod">
                    <input type="checkbox" name="normalProd"> Normal
                </label>
            </div>
            <div id="nomeClienteProdu"></div>
            <div class="dropdown-container-producao">
                <label for="artefinalSelectProdu"></label>
                <select id="artefinalSelectProdu" name="artefinalSelectProdu" class="rotated">
                    <!-- A opção selecionada será adicionada aqui usando JavaScript -->
                </select>
            </div>
            <div id="direita">
                <img id="imagemDireita" src="">
            </div>
        </div>        
        
    </div>
        </div>
    </div>
    <script type="text/javascript" src="script.js"></script> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.min.js"></script>
</body>
</html>