import { useAgregar } from "../hooks/useAgregar"
import { CONTADOR_TEXT, ID_INPUT_NOMBRE } from "../constants/contador.constants"

export function Agregar({ onRegistrar, deshabilitado }) {
    const { nombre, handleChange, handleSubmit } = useAgregar(onRegistrar)

    return (
        <form onSubmit={handleSubmit}>
            <h2>{CONTADOR_TEXT.TITULO_FORMULARIO}</h2>
            <label htmlFor={ID_INPUT_NOMBRE}>{CONTADOR_TEXT.LABEL_NOMBRE}</label>
            <input
                id={ID_INPUT_NOMBRE}
                placeholder={CONTADOR_TEXT.PLACEHOLDER_NOMBRE}
                value={nombre}
                onChange={handleChange}
                disabled={deshabilitado}
            />
            <button type="submit" disabled={deshabilitado}>
                {CONTADOR_TEXT.BOTON_REGISTRAR}
            </button>
        </form>
    )
}
