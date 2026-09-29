import { COLORES_MENSAJE } from "../constants/contador.constants"

export function MensajeEstado({ mensaje }) {
    if (!mensaje) return null

    return (
        <p role="status" style={{ color: COLORES_MENSAJE[mensaje.tipo] }}>
            {mensaje.texto}
        </p>
    )
}
