import { useState } from "react"
import { useContador } from "../hooks/useContador"
import { CONTADOR_TEXT } from "../constants/contador.constants"

export function Agregar({ setCount, onAgregarPersona }) {
    // 1. Estados para capturar los datos del formulario
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [numero, setNumero] = useState("")

    const { handleIncrement } = useContador(setCount)

    // 2. Función para procesar y guardar los datos
    function handleAgregar() {
        // Validar que no envíe campos vacíos principales
        if (!nombre.trim() || !apellido.trim()) return

        // Crear el objeto persona
        const nuevaPersona = {
            id: Date.now(),
            nombre,
            apellido,
            edad,
            numero
        }

        // Si desde el padre le pasas una función para guardar la persona
        if (onAgregarPersona) {
            onAgregarPersona(nuevaPersona)
        }

        // Incrementar el contador
        handleIncrement()

        // Limpiar el formulario
        setNombre("")
        setApellido("")
        setEdad("")
        setNumero("")
    }

    return (
        <>
            <h2>Agregar Persona</h2>
            <input 
                placeholder="Nombre" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
            />
            <input 
                placeholder="Apellido" 
                value={apellido} 
                onChange={(e) => setApellido(e.target.value)} 
            />
            <input 
                placeholder="Edad" 
                type="number"
                value={edad} 
                onChange={(e) => setEdad(e.target.value)} 
            />
            <input 
                placeholder="Numero" 
                value={numero} 
                onChange={(e) => setNumero(e.target.value)} 
            />
            <button onClick={handleAgregar}>
                {CONTADOR_TEXT.Agregar}
            </button>
        </>
    )
}