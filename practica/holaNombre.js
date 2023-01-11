function changeNameUsingPrompt() {
    let nuevoNombre = prompt("¿Cual es tu nombre entonces?");
    do {
        if (nuevoNombre === null) {
            nuevoNombre = prompt("Tienes que darme un nombre");
        }
        else {
            break;
        }
    } while (nuevoNombre === null);
    document.getElementById("tituloPresentacion").innerHTML = "Hola "+nuevoNombre+".";
}