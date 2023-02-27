const logger = require (`./logger`)

function mostrarError (){
    throw new Error("Mostrar funcion Error");
}
try {
    mostrarError();
} catch (e) {
logger.log ("error", e.toString())
}
