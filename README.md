
# Gestor de Tareas

Este es un sencillo gestor de tareas que te permite agregar, eliminar, completar, modificar, y visualizar tareas, categorizarlas, y ordenarlas de acuerdo a su nombre o fecha límite. Está implementado en JavaScript utilizando `prompt-sync` para la interacción con el usuario en la consola.

## Características

- **Agregar tareas** con fecha límite opcional y categoría asignada.
- **Eliminar tareas** de la lista.
- **Marcar tareas como completadas**.
- **Modificar tareas** ya existentes.
- **Mostrar todas las tareas**, categorizadas y con su estado de completado.
- **Filtrar tareas por categoría**.
- **Ordenar tareas** por nombre o por fecha límite.
- **Buscar una tarea por nombre**.
- **Ver cantidad de tareas completadas** en una categoría.
- **Mostrar todas las tareas no completadas**.

## Requisitos

Este programa utiliza `prompt-sync` para manejar la interacción con el usuario en la consola.

Para instalar `prompt-sync`, ejecuta el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Ejecución del Programa

Para ejecutar el programa, simplemente corre el archivo con Node.js en tu terminal:

```bash
node gestorDeTareas.js
```

## Menú de Opciones

Al ejecutar el programa, se te presentará un menú interactivo con varias opciones:

```plaintext
-------MENÚ-------
1. Agregar Tarea
2. Eliminar Tarea
3. Marcar Tarea Finalizada
4. Modificar una tarea
5. Mostrar todas las tareas
6. Mostrar Categorías
7. Agregar nueva Categoría
8. Filtrar Categorías
9. Visualizar cantidad de tareas completadas por categoría
10. Visualizar cantidad de tareas no completadas
11. Ordenar las tareas alfabéticamente
12. Ordenar las tareas por fecha límite
13. Buscar una tarea por su nombre
0. Salir
```

### Descripción de las Opciones

1. **Agregar Tarea**: Te permite ingresar el nombre de una nueva tarea y su fecha límite opcional. Se debe seleccionar una categoría para la tarea.
   
2. **Eliminar Tarea**: Elimina una tarea de la lista según su índice.

3. **Marcar Tarea Finalizada**: Cambia el estado de una tarea a "completada".

4. **Modificar una Tarea**: Te permite modificar el nombre, la fecha límite o la categoría de una tarea específica.

5. **Mostrar todas las tareas**: Muestra todas las tareas, indicando si están completadas o no, junto con la categoría y la fecha límite.

6. **Mostrar Categorías**: Muestra las categorías disponibles para clasificar tareas.

7. **Agregar nueva Categoría**: Te permite crear nuevas categorías para clasificar las tareas.

8. **Filtrar Categorías**: Muestra todas las tareas de una categoría específica.

9. **Visualizar cantidad de tareas completadas por categoría**: Te muestra cuántas tareas completadas y no completadas hay en una categoría específica.

10. **Visualizar tareas no completadas**: Muestra todas las tareas que aún no han sido completadas.

11. **Ordenar tareas alfabéticamente**: Ordena las tareas por su nombre utilizando el algoritmo BubbleSort.

12. **Ordenar tareas por fecha límite**: Ordena las tareas según su fecha límite, también utilizando el algoritmo BubbleSort.

13. **Buscar una tarea por nombre**: Busca una tarea específica por nombre usando búsqueda binaria. Asegúrate de ordenar las tareas antes de buscar.

14. **Salir**: Termina el programa.

## Estructura del Código

El programa está organizado en funciones para manejar cada una de las características:

### Función `agregarTarea(nombreRecibido, fechaLimiteRecibida)`

Permite agregar una tarea. Al ejecutarla, te solicita:
- **Nombre de la tarea**.
- **Fecha límite** (opcional).
- **Categoría** de la tarea (debe ser seleccionada).

### Función `eliminarTarea(indice)`

Elimina una tarea de la lista en función del índice ingresado.

### Función `tareaCompletada(indice)`

Marca una tarea como completada, modificando su estado a `true`.

### Función `modificarTarea(indice, nuevaTarea, nuevaFechaLimiteRecibida, nuevoNumCategoria)`

Permite modificar el nombre, fecha límite y categoría de una tarea existente.

### Función `filtrarTareasxCategoria(numCategoria)`

Devuelve un array de tareas filtradas por una categoría específica.

### Función `contarTareasCompletadas(numCategoria)`

Cuenta cuántas tareas han sido completadas dentro de una categoría específica y cuántas están pendientes.

### Función `mostrarTareasNoComp()`

Muestra todas las tareas que aún no han sido completadas.

### Función `ordenarTareasXNombre()`

Ordena las tareas por nombre utilizando el algoritmo BubbleSort.

### Función `ordenarTareasXFechaLimite()`

Ordena las tareas por fecha límite utilizando el algoritmo BubbleSort.

### Función `buscarTareaXNombre(nombreTarea)`

Realiza una búsqueda binaria de una tarea por su nombre en el array de tareas. **Importante**: asegúrate de ordenar las tareas por nombre antes de realizar la búsqueda.

## Ejemplos de Uso

### Agregar una tarea

```plaintext
Ingrese el nombre de la tarea: Comprar leche
Ingrese la fecha límite: 2024-09-20
Ingresa el número de la categoría para la nueva tarea: 1
Tarea cargada con éxito!
```

### Filtrar tareas por categoría

```plaintext
Ingrese el número de la categoría a filtrar: 0
Tareas de la categoría seleccionada:
 - Nombre: Terminar proyecto, Completada: No
```

### Marcar una tarea como completada

```plaintext
Ingrese el índice de la tarea completada: 0
Tarea completada
```