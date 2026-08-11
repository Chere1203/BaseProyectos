# UserList

## Intent
Permitir agregar y eliminar usuarios en una lista local desde la página principal.

## In scope
- Renderizar un título para la tarea UserList.
- Renderizar un label y un input para capturar el nombre de un usuario.
- Permitir agregar el usuario a una lista visible.
- Permitir eliminar cualquier usuario de la lista.

## Out of scope
- Persistencia en backend o Firebase.
- Edición de usuarios ya agregados.

## Requirements
- El formulario debe evitar agregar nombres vacíos o solo espacios.
- Al agregar un usuario válido, el input se limpia.
- Cada usuario agregado debe tener acción de eliminación.

## Edge cases & errors
- Si no hay usuarios, mostrar estado vacío en lugar de lista.

## Constraints
- Reutilizar componentes compartidos (`Section`, `Title`, `FormField`, `Button`, `Text`).
- UI literals centralizados en `@/app/constants`.

## Acceptance criteria
- [ ] Se muestra el título de UserList.
- [ ] Se muestra label + input para nuevo usuario.
- [ ] Se puede agregar un usuario y aparece en la lista.
- [ ] Se puede eliminar un usuario de la lista.
- [ ] No se agregan usuarios vacíos.
