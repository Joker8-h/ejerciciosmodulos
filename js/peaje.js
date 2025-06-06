const TARIFAS = {
    automovil: 5000,
    bus: 10000,
    camion: 15000
};

let estado = {
    conteoVehiculos: {
        automovil: 0,
        bus: 0,
        camion: 0
    },
    totalRecaudado: 0
};

export function iniciarPeaje() {
    estado.conteoVehiculos = { 
            automovil: 0,
            bus: 0, 
            camion: 0 };
    estado.totalRecaudado = 0;
    return estado;
}

/**
 * Registra el paso de un vehículo actualizando el conteo y el total
 * @param {string} tipo - El tipo de vehículo ('automovil', 'bus', 'camion').
 */
export function registrarPasoVehiculo(tipo) {
    if (TARIFAS[tipo] !== undefined) {
        estado.conteoVehiculos[tipo]++;
        estado.totalRecaudado += TARIFAS[tipo];
    }
    return estado;
}