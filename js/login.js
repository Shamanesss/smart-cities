//Crear el formulario de login (abrir y cerrar el formulario del login)
function openLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function closeLoginPopup() {

    document.getElementById("loginPopup").style.display = "none";

}

document.getElementById("loginItem").addEventListener("click", function (event) {
    event.preventDefault();
    openLoginPopup();
});


//Logearte en la pagina
const btn_login = document.getElementById('btn-popup')
const nombre = document.getElementById('username')
const formulario_popup = document.getElementById('formulario_login')
const welcome = document.getElementById('nav-name-login-id')
const btnLogout = document.getElementById('btn-logout');


formulario_popup.addEventListener('submit', e => {
    e.preventDefault();
    loguearset();
})

window.addEventListener('load', () => {
    loguearget();
    btnLogout.style.display = 'block';
});

const usernameError = document.getElementById('username-error');
function loguearset() {

    let username_set = nombre.value;
    if (username_set === '') {
        usernameError.textContent = 'Por favor, ingrese un nombre de usuario.';
        return
    }
    localStorage.setItem('loginOk', username_set);
    console.log(username_set)


    closeLoginPopup();
    btnLogout.style.display = 'block';
    loguearget();

}
// ----------------------------------------------------

function loguearget() {
    let username_get = localStorage.getItem('loginOk');
    if (username_get === null) {
        username_get = '';
    } else {
        welcome.innerHTML = `${username_get}  `;
    }
}



// Función para cerrar sesión


btnLogout.addEventListener('click', cerrarSesion);


function cerrarSesion() {
    localStorage.removeItem('loginOk');
    welcome.innerHTML = '';
   

}

// Mostrar u ocultar la contraseña

let contrasena = document.getElementById('password');
let ojoCerrado = document.getElementById('ojoCerrado')

let ojoAbierto = document.getElementById('ojoAbierto')
ojoAbierto.addEventListener('click', hacker);
ojoCerrado.addEventListener('click', hacker);
function hacker() {
    if (contrasena.type == 'password') {
        contrasena.type = 'text';

        ojoAbierto.style.visibility = "hidden";
        ojoCerrado.style.visibility = "visible";

    } else {
        contrasena.type = 'password';
        ojoCerrado.style.visibility = "hidden";
        ojoAbierto.style.visibility = "visible";

    }
}
