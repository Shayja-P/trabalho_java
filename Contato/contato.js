var navbarvertical = document.getElementById("navt");

navbarvertical.style.height = '0%';
function toggle() {
    if (navbarvertical.style.height == '0%') {
        navbarvertical.style.height = '50%';
    } else {
        navbarvertical.style.height = '0%';
    }
}

var navbarvertical = document.getElementById("navt");

navbarvertical.style.height = '0%';
function toggle() {
    if (navbarvertical.style.height == '0%') {
        navbarvertical.style.height = '50%';
    } else {
        navbarvertical.style.height = '0%';
    }
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function validarFormulario(event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Obtendo os valores dos campos
    const nome = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const telefone = document.querySelector('input[name="phone"]');
    const mensagem = document.querySelector('textarea[name="message"]');

    // Verifica se o campo Nome está vazio
    if (nome.value.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        nome.focus();
        return false;
    }

    // Verifica se o campo E-mail está vazio ou se não é um e-mail válido
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.value.trim() === "" || !emailRegex.test(email.value)) {
        alert("Por favor, preencha um E-mail válido.");
        email.focus();
        return false;
    }

    // Verifica se o campo Telefone está vazio ou se não é válido
    const telefoneValido = validarTelefone(telefone.value);
    if (!telefoneValido) {
        alert("Por favor, preencha um número de telefone válido no formato (XX) XXXXX-XXXX.");
        telefone.focus();
        return false;
    }

    // Verifica se o campo Mensagem está vazio
    if (mensagem.value.trim() === "") {
        alert("Por favor, preencha o campo Mensagem.");
        mensagem.focus();
        return false;
    }

    // Se tudo estiver correto, o formulário será enviado
    alert("Formulário enviado com sucesso!");
    document.querySelector("form").submit(); // Envia o formulário
}

// Função para aplicar a máscara no telefone
function aplicarMascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    if (telefone.length <= 10) {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return telefone;
}

// Função para validar o telefone
function validarTelefone(telefone) {
    const telefoneMascara = telefone.replace(/\D/g, ''); // Remove caracteres não numéricos
    const telefoneRegex = /^[0-9]{10,11}$/;  // Aceita 10 ou 11 dígitos numéricos

    if (telefoneRegex.test(telefoneMascara)) {
        return true;
    } else {
        return false;
    }
}

// Adiciona o evento de submit para chamar a função de validação
document.querySelector("form").addEventListener("submit", validarFormulario);

// Adiciona a máscara ao campo de telefone enquanto o usuário digita
document.querySelector('input[name="phone"]').addEventListener('input', function (event) {
    this.value = aplicarMascaraTelefone(this.value);
});