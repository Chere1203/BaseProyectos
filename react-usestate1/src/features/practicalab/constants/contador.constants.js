export const CAPACIDAD_MAXIMA = 5
export const NOMBRE_VACIO = ""
export const ID_INPUT_NOMBRE = "nombre-participante"

export const TIPO_MENSAJE = {
    EXITO: "exito",
    ERROR: "error",
}

export const CONTADOR_TEXT = {
    TITULO: "Registro de participantes",
    TITULO_FORMULARIO: "Nuevo participante",
    LABEL_NOMBRE: "Nombre",
    PLACEHOLDER_NOMBRE: "Ingrese el nombre del participante",
    BOTON_REGISTRAR: "Registrar",
    TITULO_RESUMEN: "Resumen",
    LABEL_REGISTRADOS: "Participantes registrados",
    LABEL_DISPONIBLES: "Cupos disponibles",
    LABEL_CAPACIDAD: "Capacidad máxima",
    TITULO_LISTADO: "Participantes",
    LISTADO_VACIO: "Aún no hay participantes registrados.",
}

export const MENSAJES = {
    NOMBRE_VACIO: "El nombre no puede estar vacío ni contener solo espacios.",
    CAPACIDAD_ALCANZADA: "Se alcanzó la capacidad máxima. No se pueden registrar más participantes.",
    REGISTRO_EXITOSO: (nombre) => `"${nombre}" fue registrado correctamente.`,
}

export const COLORES_MENSAJE = {
    [TIPO_MENSAJE.EXITO]: "green",
    [TIPO_MENSAJE.ERROR]: "crimson",
}
