document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email === "teste@teste.com" && senha === "123456") {
            alert("Login bem-sucedido!");
            window.location.href = "inde2.html";
        } else {
            alert("E-mail ou senha incorretos!");
        }
    });
});
