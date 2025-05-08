// CONSTANTES 
const aceptar = document.getElementById('politica-check');
const enviar = document.getElementById('enviar-btn');

// ESTADO INICIAL DESABILITADO
if (enviar) {
    enviar.disabled = true;
    enviar.style.cursor = "not-allowed";
    enviar.style.borderColor = "#eaeaea"
}

// LISTENERS
aceptar.addEventListener('click', enviarON);

function enviarON() {
    if (aceptar.checked) {
        enviar.disabled = false;
        enviar.style.cursor = "pointer";
        enviar.style.borderColor = "#000"
    } else {
        enviar.disabled = true;
        enviar.style.cursor = "not-allowed";
    }
}
