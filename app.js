const InputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListamigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const modal = document.getElementById("customAlert");
const alertMessage = document.getElementById("alertMessage");

function showAlert(message) {
    alertMessage.textContent = message;
    modal.style.display = "block";
}

function closeAlert() {
    modal.style.display = "none";
}

function agregarAmigo() {
    if (InputAmigo.value.trim() === "") {
        showAlert("Debes ingresar un nombre");
        return;
    }

    if (listaAmigos.includes(InputAmigo.value)) {
        showAlert(`El nombre: ${InputAmigo.value} ya existe`);
        return;
    }

    listaAmigos.push(InputAmigo.value);
    ulListamigos.innerHTML += `<li>${InputAmigo.value}</li>`;
    InputAmigo.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        showAlert("No hay amigos disponibles para sortear, agrega algunos");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

function resetLista() {
    listaAmigos.length = 0; 
    ulListamigos.innerHTML = ""; 
    ulResultado.innerHTML = ""; 
}
