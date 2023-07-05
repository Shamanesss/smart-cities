
const accept = document.getElementById('accept')
const button = document.getElementById('button')
accept.addEventListener('click', enviar)

function enviar() {


    if (accept.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;

    }
} 