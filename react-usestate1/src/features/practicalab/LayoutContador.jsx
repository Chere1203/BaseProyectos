import { useContador } from "./hooks/useContador"
import { Agregar } from "./agregar/Agregar.jsx"
import { MensajeEstado } from "./mensajeEstado/MensajeEstado.jsx"
import { ResumenCupos } from "./resumenCupos/ResumenCupos.jsx"
import { ListadoParticipantes } from "./listadoParticipantes/ListadoParticipantes.jsx"
import { CONTADOR_TEXT } from "./constants/contador.constants"

export function LayoutContador() {
    const {
        participantes,
        cantidadRegistrados,
        cuposDisponibles,
        capacidadMaxima,
        capacidadAlcanzada,
        mensaje,
        avisoCapacidad,
        registrarParticipante,
    } = useContador()

    return (
        <main>
            <h1>{CONTADOR_TEXT.TITULO}</h1>
            <Agregar onRegistrar={registrarParticipante} deshabilitado={capacidadAlcanzada} />
            <MensajeEstado mensaje={mensaje} />
            <MensajeEstado mensaje={avisoCapacidad} />
            <ResumenCupos
                cantidadRegistrados={cantidadRegistrados}
                cuposDisponibles={cuposDisponibles}
                capacidadMaxima={capacidadMaxima}
            />
            <ListadoParticipantes participantes={participantes} />
        </main>
    )
}

export default LayoutContador
