document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Execute código para registrar os dados no banco de dados (você precisa implementar isso)
    // Você pode usar AJAX ou fazer uma solicitação POST em JavaScript
    
    // Após o registro bem-sucedido, abra a tela de impressão
    window.print();
});

function toggleSidebar() {
    const dashboard = document.querySelector('.dashboard-container');
    dashboard.classList.toggle('show-sidebar');
}


document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha os valores dos campos
    var nomeCliente = document.getElementById("nomeCliente").value;
    var artefinalselect = document.getElementById("artefinalSelect").value;
    var data = new Date().toLocaleDateString();

    // Crie um objeto com os dados
    var dados = {
        nomeCliente: nomeCliente,
        artefinalselect: artefinalselect,
        data: data,
    };

    // Verifique se há dados salvos no LocalStorage
    var dadosSalvos = JSON.parse(localStorage.getItem("dadosSalvos")) || [];

    // Adicione os novos dados à lista de dados salvos
    dadosSalvos.push(dados);

    // Salve os dados no LocalStorage
    localStorage.setItem("dadosSalvos", JSON.stringify(dadosSalvos));

    // Exiba a mensagem "Dados Salvos"
    document.getElementById("mensagem").textContent = "Dados Salvos";

    // Redirecione para a página layoutsGerados.html
    setTimeout(function () {
        window.location.href = "layoutsGerados.html";
    }, 1000); // Redireciona após 1 segundo
});



// Função para sincronizar as duas caixas de seleção
function sincronizarOpcao() {
    var selectOriginal = document.getElementById("artefinalSelect");
    var selectProducao = document.getElementById("artefinalSelectProdu");

    // Obter a opção selecionada na primeira caixa de seleção
    var selectedOption = selectOriginal.options[selectOriginal.selectedIndex].cloneNode(true);

    // Limpar a segunda caixa de seleção
    while (selectProducao.firstChild) {
        selectProducao.removeChild(selectProducao.firstChild);
    }

    // Adicionar a opção selecionada na segunda caixa de seleção
    selectProducao.appendChild(selectedOption);

    // Atualizar a classe CSS da segunda caixa de seleção (se necessário)
    selectProducao.className = "rotated";

    // Chamar a função novamente após um pequeno atraso (para sincronizar ao carregar a página)
    setTimeout(sincronizarOpcao, 100);
}

// Chamar a função para sincronizar as caixas de seleção quando a página carregar
window.onload = sincronizarOpcao;

// Chamar a função quando a primeira caixa de seleção for alterada
document.getElementById("artefinalSelect").addEventListener("change", sincronizarOpcao);

// Função para copiar a opção selecionada da primeira caixa de seleção para a segunda
function copiarOpcao() {
    var selectOriginal = document.getElementById("artefinalSelect");
    var selectProducao = document.getElementById("artefinalSelectProdu");

    // Obter o índice da opção selecionada na primeira caixa de seleção
    var selectedIndex = selectOriginal.selectedIndex;

    // Copiar a opção selecionada da primeira caixa de seleção para a segunda
    selectProducao.selectedIndex = selectedIndex;
}

// Chamar a função quando a primeira caixa de seleção for alterada
document.getElementById("artefinalSelect").addEventListener("change", copiarOpcao);

function syncCheckboxes(sourceCheckbox, targetCheckbox) {
    targetCheckbox.checked = sourceCheckbox.checked;
}

const checkboxTerceirizado = document.querySelector('input[name="terceirizado"]');
const checkboxNormal = document.querySelector('input[name="normal"]');

const checkboxTerceirizadoProd = document.querySelector('input[name="terceirizadoProd"]');
const checkboxNormalProd = document.querySelector('input[name="normalProd"]');

checkboxTerceirizado.addEventListener('click', function() {
    syncCheckboxes(checkboxTerceirizado, checkboxTerceirizadoProd);
});

checkboxNormal.addEventListener('click', function() {
    syncCheckboxes(checkboxNormal, checkboxNormalProd);
});

function allowDrop(event) {
event.preventDefault();
}

function pasteImage(event) {
event.preventDefault();
const items = event.clipboardData.items;
for (let i = 0; i < items.length; i++) {
    if (items[i].type.indexOf('image') !== -1) {
        const blob = items[i].getAsFile();
        if (blob) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imagemEsquerda = document.getElementById('esquerda');
                const imagemDireita = document.getElementById('imagemDireita');
                imagemEsquerda.innerHTML = '';
                imagemDireita.src = e.target.result;

                const imgEsquerda = document.createElement('img');
                imgEsquerda.src = e.target.result;
                imgEsquerda.alt = 'Imagem na Div Esquerda';
                
                imgEsquerda.style.maxWidth = '100%';
                imgEsquerda.style.maxHeight = '100%';
                
                imagemEsquerda.appendChild(imgEsquerda);
            };
            reader.readAsDataURL(blob);
        }
    }
}
}


function exibirTexto() {
var textoDigitado = document.getElementById("nomeCliente").value;
document.getElementById("nomeClienteProdu").textContent = "" + textoDigitado;
}
  
// JavaScript para exibir a data atual no formato DD/MM/AAAA
function exibirData() {
const dataDiv = document.getElementById('data');
const dataAtual = new Date();
const dia = String(dataAtual.getDate()).padStart(2, '0');
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês é base 0, então adicionamos 1
const ano = dataAtual.getFullYear();
const dataFormatada = `${dia}/${mes}/${ano}`;
dataDiv.textContent = dataFormatada;
}

// Chama a função inicialmente e a cada segundo para manter a data atualizada
exibirData();
setInterval(exibirData, 1000);


// JavaScript para exibir a data atual no formato DD/MM/AAAA na div produção
function exibirDataProdu() {
const dataDiv = document.getElementById('dataProdu');
const dataAtual = new Date();
const dia = String(dataAtual.getDate()).padStart(2, '0');
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês é base 0, então adicionamos 1
const ano = dataAtual.getFullYear();
const dataFormatada = `${dia}/${mes}/${ano}`;
dataDiv.textContent = dataFormatada;
}

// Chama a função inicialmente e a cada segundo para manter a data atualizada
exibirDataProdu();
setInterval(exibirDataProdu, 1000);


function allowDrop(event) {
event.preventDefault();
}

// Mantenha uma referência à imagem na div esquerda
const imagemEsquerda = document.getElementById('esquerda');
const imagemDireita = document.getElementById('imagemDireita');

imagemEsquerda.addEventListener('keydown', function(event) {
    // Verifique se a tecla pressionada é "Delete" (46) ou "Backspace" (8)
    if (event.keyCode === 46 || event.keyCode === 8) {
        // Limpe o conteúdo da div esquerda
        imagemEsquerda.innerHTML = '';
        // Limpe o conteúdo da div direita
        imagemDireita.src = '';
    }
});

// Certifique-se de que a div esquerda tenha foco para que possa responder a eventos de teclado
imagemEsquerda.focus();