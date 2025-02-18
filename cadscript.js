
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastro-form");
    const mensagem = document.createElement("p");
    mensagem.style.textAlign = "center";
    form.appendChild(mensagem);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmar-senha").value;
        const email = document.getElementById("email").value;
        const confirmarEmail = document.getElementById("confirmar-email").value;
        const recaptcha = document.getElementById("recaptcha");

        if (senha !== confirmarSenha) {
            mensagem.textContent = "As senhas não coincidem!";
            mensagem.style.color = "red";
        } else if (email !== confirmarEmail) {
            mensagem.textContent = "Os e-mails não coincidem!";
            mensagem.style.color = "red";
        } else if (!recaptcha.checked) {
            mensagem.textContent = "Confirme que você não é um robô.";
            mensagem.style.color = "red";
        } else {
            mensagem.textContent = "Cadastro realizado com sucesso!";
            mensagem.style.color = "green";
            form.reset();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function validarTexto(input, maxLength) {
        input.addEventListener("input", function() {
            this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "").slice(0, maxLength);
        });
    }

    function validarNumero(input, maxLength) {
        input.addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9]/g, "").slice(0, maxLength);
        });
    }

    validarTexto(document.getElementById("nome"), 50);
    validarTexto(document.getElementById("sobrenome"), 50);
    validarNumero(document.getElementById("cpf"), 11);
    validarNumero(document.getElementById("telefone"), 11);

   
    document.getElementById("cadastro-form").addEventListener("submit", function(event) {
        event.preventDefault();

 
    
        window.location.href = "inde2.html"; 
    });
});

