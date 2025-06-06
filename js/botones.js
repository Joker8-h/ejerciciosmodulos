const elementos = {
    btnAbrir: document.getElementById('btn-abrir'),
    btnCerrar: document.getElementById('btn-cerrar'),
    selectoresVehiculos: document.getElementById('vehicle-selectors'),
    conteoAutomovil: document.getElementById('count-automovil'),
    conteoBus: document.getElementById('count-bus'),
    conteoCamion: document.getElementById('count-camion'),
    totalRecaudado: document.getElementById('total-recaudado')
};

/**
 * Actualiza la vista de la pagina
 * @param {object} estado - El estado actual del peaje (conteo y total).
 */
export function actualizarVista(estado) {
    elementos.conteoAutomovil.value = estado.conteoVehiculos.automovil;
    elementos.conteoBus.value = estado.conteoVehiculos.bus;
    elementos.conteoCamion.value = estado.conteoVehiculos.camion;
    // borrar el texto del total actual
    elementos.totalRecaudado.value = `$ ${estado.totalRecaudado.toLocaleString('es-CO')}`;
}

/**
 Peaje Abierto
 */
export function configurarEstadoAbierto() {
    elementos.btnAbrir.disabled = true;
    elementos.btnCerrar.disabled = false;
    elementos.selectoresVehiculos.classList.remove('disabled');
}

export function configurarEstadoCerrado() {
    elementos.btnAbrir.disabled = false;
    elementos.btnCerrar.disabled = true;
    elementos.selectoresVehiculos.classList.add('disabled');
}


export function getContenedorVehiculos() {
    return elementos.selectoresVehiculos;
}

/**
 * Devuelve los botones para añadir eventos.
 */
export function getBotones() {
    return {
        abrir: elementos.btnAbrir,
        cerrar: elementos.btnCerrar
    };
}

