import * as peaje from './peaje.js';
import * as ast from './botones.js';

// Función para manejar la accionde abrir el peaje
function handleAbrirPeaje() {
    const estadoInicial = peaje.iniciarPeaje();
    ast.actualizarVista(estadoInicial);  
    ast.configurarEstadoAbierto();  
}

// Función para manejar la accison de cerrar el peaje
function handleCerrarPeaje() {
    ast.configurarEstadoCerrado(); 
}

//  para manejar el registro de los autos
function handleRegistrarVehiculo(event) {
    const target = event.target;
    if (target.tagName === 'IMG' && target.dataset.vehicleType) {
        const tipoVehiculo = target.dataset.vehicleType;
        const estadoActual = peaje.registrarPasoVehiculo(tipoVehiculo);  
        ast.actualizarVista(estadoActual); 
    }
}

function inicializar() {
    const botones = ast.getBotones();
    const contenedorVehiculos = ast.getContenedorVehiculos();

    botones.abrir.addEventListener('click', handleAbrirPeaje);
    botones.cerrar.addEventListener('click', handleCerrarPeaje);

    
    contenedorVehiculos.addEventListener('click', handleRegistrarVehiculo);

    
}
inicializar();