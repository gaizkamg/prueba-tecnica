// CONSTANTES 
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginForm = document.getElementById('login-form');
const alert_card = document.getElementById('alert-card');
const ojoPass = document.getElementById('ojo-pass');
const verPass = document.getElementById('verPass');

// LISTENERS
if (loginForm) {
    loginForm.addEventListener('submit', loginSession);
   }

alert_card.addEventListener('click', closeModal);
verPass.addEventListener('click', verPassToggle);

// DATOS PERSONALES
const usuario = "usuario1";
const pass = "1234";

// INICIO DE SESIÓN
function loginSession(event) {
    console.log('Función loginSession ejecutada'); 
    event.preventDefault(); 
    const usuarioInput = username.value.trim();
    const passwordInput = password.value.trim();

    if (usuarioInput === usuario && passwordInput === pass) {
        // Login exitoso
        alert_card.innerHTML = 'Bienvenido a Digital Friends. Click para continuar';
        alert_card.classList.remove('hidden');
        alert_card.style.color = 'green';
        alert_card.style.background = 'white';
    } else {
        // Login incorrecto
        alert_card.innerHTML = 'Usuario o contraseña incorrectos. Click para continuar';
        alert_card.classList.remove('hidden');
        alert_card.style.color = 'white';
        alert_card.style.background = 'red';
    }
}

function closeModal() {
    alert_card.classList.toggle('hidden');
}

function verPassToggle() {
    if (password.type === 'password') {
        password.type = 'text';
        ojoPass.src = 'img/logos/ojo-abierto.svg'; 
    } else {
        password.type = 'password';
        ojoPass.src = 'img/logos/ojo-cerrado.svg'; 
    }
    
}


