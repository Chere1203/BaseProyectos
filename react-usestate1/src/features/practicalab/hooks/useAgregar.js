import { useState } from "react"
import { NOMBRE_VACIO } from "../constants/contador.constants"

export function useAgregar(onRegistrar) {
    const [nombre, setNombre] = useState(NOMBRE_VACIO)

    function handleChange(evento) {
        setNombre(evento.target.value)
    }

    function handleSubmit(evento) {
        evento.preventDefault()
        if (onRegistrar(nombre)) {
            setNombre(NOMBRE_VACIO)
        }
    }

    return { nombre, handleChange, handleSubmit }
}

export default useAgregar
