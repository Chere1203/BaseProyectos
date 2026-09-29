import { CONTADOR_TEXT } from "../constants/contador.constants"

export function ResumenCupos({ cantidadRegistrados, cuposDisponibles, capacidadMaxima }) {
    return (
        <section>
            <h2>{CONTADOR_TEXT.TITULO_RESUMEN}</h2>
            <p>
                {CONTADOR_TEXT.LABEL_REGISTRADOS}: <strong>{cantidadRegistrados}</strong>
            </p>
            <p>
                {CONTADOR_TEXT.LABEL_DISPONIBLES}: <strong>{cuposDisponibles}</strong>
            </p>
            <p>
                {CONTADOR_TEXT.LABEL_CAPACIDAD}: <strong>{capacidadMaxima}</strong>
            </p>
        </section>
    )
}
