// CONSTANTES 
const login = document.getElementById('login');
const usuario = document.getElementById('usuario');
const password = document.getElementById('password');

// DATOS PERSONALES
const usuarios = [
    { usuario: "usuario1", password: "contraseña1", telefono: "1234" },
    { usuario: "usuario2", password: "contraseña2", telefono: "56789" },
    { usuario: "belen", password: "2002", telefono: "606803157" }
];


// INICIO DE SESION
function iniciarsesion() {
    if (usuario && password) { 
        const usuarioInput = usuario.value;
        const passwordInput = password.value;


        if( !usuarioInput || !passwordInput) {
            alert('COMPLETA O NO COMES :(');
            return;
        }

        const usuariovalido = usuarios.find(u => u.usuario === usuarioInput && u.password === passwordInput);

        if (usuariovalido) {
            alert('HOLI DE NUEVO :)');
        } else {
            alert('NO TE CONOZCO :(');
        } 
    }
}