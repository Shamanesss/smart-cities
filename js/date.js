// Mostrar la fecha y la hora

let date_hour = document.getElementById("date_hour")

function actualizarFechaHora() {

    const date_actual = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    let date = date_actual.toLocaleDateString('es-ES', options);
    let hour = date_actual.toLocaleTimeString();

    date = capitalizeFirstLetter(date);
    date_hour.innerHTML = `${date} ${hour}`
}
// pone la primera letra  del dia de la semana en mayuscula
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

setInterval(actualizarFechaHora, 1000);







