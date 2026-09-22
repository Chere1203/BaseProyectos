import { useState } from "react"
import { Contador1 } from "./contador1/contador1"
import { Contador2 } from "./contador2/Contador2.jsx"
import { Agregar } from "./agregar/Agregar.jsx"


export function LayoutContador() {

    const [count, setCount] = useState(0)
    const [personas, setPersonas] = useState([])

    function handleAgregarPersona(persona) {
        setPersonas(prev => [...prev, persona])
        setCount(prev => prev + 1)
    }

    return (
        <>
            <Contador1 count={count} setCount={setCount} />
            <Contador2 count={count} setCount={setCount} />
            <Agregar setCount={setCount} onAgregarPersona={handleAgregarPersona} />
        </>
    )
}