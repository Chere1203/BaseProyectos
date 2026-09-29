import { CONTADOR_TEXT } from "../constants/contador.constants"

export function ListadoParticipantes({ participantes }) {
    const estaVacio = !participantes.length

    return (
        <section>
            <h2>{CONTADOR_TEXT.TITULO_LISTADO}</h2>
            {estaVacio ? (
                <p>{CONTADOR_TEXT.LISTADO_VACIO}</p>
            ) : (
                <ol>
                    {participantes.map((participante) => (
                        <li key={participante.id}>{participante.nombre}</li>
                    ))}
                </ol>
            )}
        </section>
    )
}
