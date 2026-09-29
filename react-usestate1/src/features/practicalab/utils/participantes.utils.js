import { NOMBRE_VACIO } from "../constants/contador.constants"

export function normalizarNombre(nombre) {
    return nombre.trim()
}

export function esNombreValido(nombre) {
    return normalizarNombre(nombre) !== NOMBRE_VACIO
}

export function hayCupoDisponible(cantidadRegistrados, capacidadMaxima) {
    return cantidadRegistrados < capacidadMaxima
}

export function crearParticipante(nombre) {
    return {
        id: crypto.randomUUID(),
        nombre: normalizarNombre(nombre),
    }
}
