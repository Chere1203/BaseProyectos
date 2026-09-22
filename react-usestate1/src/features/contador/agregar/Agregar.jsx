import { useState } from "react"
import { CONTADOR_TEXT } from "../constants/contador.constants"

export function Agregar({ onAgregarPersona }) {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [numero, setNumero] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (!nombre.trim()) return

        const nuevaPersona = {
            id: Date.now(),
            nombre,
            apellido,
            edad,
            numero
        }

        onAgregarPersona(nuevaPersona)

        // Limpiar inputs
        setNombre("")
        setApellido("")
        setEdad("")
        setNumero("")
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">{CONTADOR_TEXT.Agregar || "Agregar"}</button>
        </form>
    )
}