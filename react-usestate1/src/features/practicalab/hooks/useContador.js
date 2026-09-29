import { useState } from "react"
import { CAPACIDAD_MAXIMA, MENSAJES, TIPO_MENSAJE } from "../constants/contador.constants"
import { crearParticipante, esNombreValido, hayCupoDisponible } from "../utils/participantes.utils"

export function useContador(capacidadMaxima = CAPACIDAD_MAXIMA) {
    const [participantes, setParticipantes] = useState([])
    const [mensaje, setMensaje] = useState(null)

    const cantidadRegistrados = participantes.length
    const cuposDisponibles = capacidadMaxima - cantidadRegistrados
    const capacidadAlcanzada = !hayCupoDisponible(cantidadRegistrados, capacidadMaxima)
    const avisoCapacidad = capacidadAlcanzada
        ? { tipo: TIPO_MENSAJE.ERROR, texto: MENSAJES.CAPACIDAD_ALCANZADA }
        : null

    function registrarParticipante(nombre) {
        if (capacidadAlcanzada) {
            setMensaje({ tipo: TIPO_MENSAJE.ERROR, texto: MENSAJES.CAPACIDAD_ALCANZADA })
            return false
        }

        if (!esNombreValido(nombre)) {
            setMensaje({ tipo: TIPO_MENSAJE.ERROR, texto: MENSAJES.NOMBRE_VACIO })
            return false
        }

        const nuevoParticipante = crearParticipante(nombre)

        setParticipantes((anteriores) => [...anteriores, nuevoParticipante])
        setMensaje({
            tipo: TIPO_MENSAJE.EXITO,
            texto: MENSAJES.REGISTRO_EXITOSO(nuevoParticipante.nombre),
        })
        return true
    }

    return {
        participantes,
        cantidadRegistrados,
        cuposDisponibles,
        capacidadMaxima,
        capacidadAlcanzada,
        mensaje,
        avisoCapacidad,
        registrarParticipante,
    }
}

export default useContador
