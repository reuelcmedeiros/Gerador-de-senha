let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#value");
let passwordDisplay = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%";

// Atualiza o valor exibido do slider
sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
};

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    passwordDisplay.innerHTML = pass; // Atualiza o conteúdo do span com a senha gerada
    containerPassword.classList.remove("hide"); // Mostra o contêiner da senha gerada
}

// Adiciona o evento de clique ao botão
buttonElement.addEventListener("click", generatePassword);

// Adiciona o evento de clique ao span da senha para copiar
passwordDisplay.addEventListener("click", function () {
    const passwordText = passwordDisplay.innerHTML;
    navigator.clipboard.writeText(passwordText)
})
