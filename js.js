function numeroAleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jugarJuego() {
    const numeroAleatorio = numeroAleatorioEntre(10, 90);
    let numeroElegido = null;

    while (true) {
        numeroElegido = parseInt(prompt("Elige un número por favor"));

        if (isNaN(numeroElegido)) {
            alert("Eso no es un número. Intenta de nuevo.");
            continue; 
        }

        if (numeroElegido === numeroAleatorio) {
            alert("¡Ganaste! Felicitaciones.");
            break; 
        } else {
            let diferencia = Math.abs(numeroElegido - numeroAleatorio);
            if (diferencia <= 3) {
                alert("¡Muy cerca! Intenta de nuevo.");
            } else if (diferencia <= 10) {
                alert("menos frio Intenta de nuevo.");
            } else if (diferencia <= 20) {
                alert("¡Estás frío! Intenta de nuevo.");
            } else {
                alert("¡Muy frío! Intenta de nuevo.");
            }
        }
    }
}


while (true) {
    jugarJuego();
    let jugarNuevamente = prompt("¿Quieres jugar otra vez? (si/no)").toLowerCase();
    if (jugarNuevamente !== "si") {
        break; 
    }
}