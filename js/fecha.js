function relojFecha() {
    const hoy = new Date();
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const day = days[hoy.getDay()];
    const date = hoy.getDate();
    const month = months[hoy.getMonth()];
    const year = hoy.getFullYear();
    const time = hoy.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const formattedDateTime = `${day} | ${time} | ${date} ${month}, ${year}`;

    document.getElementById("fecha").textContent = formattedDateTime;
}

// ACTUALIZAR SEGUNDERO
setInterval(relojFecha, 1000);

// LANZAR EL RELOJ
relojFecha();