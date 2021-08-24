const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug"; //production 

logger.info("La aplicacion se inicio muy bien.");
logger.warn("Cuidado falta la librerira X en el sistema.");
logger.error("No se encontro la funcion enviar email.");
logger.fatal("No se pudo inicializar la aplicacion.");

function sumar(x, y) {
    return x + y;
}

module.exports = sumar;