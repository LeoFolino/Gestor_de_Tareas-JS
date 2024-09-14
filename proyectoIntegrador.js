const prompt = require('prompt-sync')();

// Array para almacenar tareas
let tareas = [];

// Función para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida) {
    tareas.push({ nombre: nombreRecibido, completada: false, fechaLimite: fechaLimiteRecibida });
}

// Eliminar una tarea
function eliminarTarea(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        console.log("Tarea eliminada correctamente");
    } else {
        console.log("Índice de tarea inválido");
    }
}

// Marcar tarea completada
function tareaCompletada(indice) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log('Tarea completada');
    } else {
        console.log('Índice de tarea inválido');
    }
}

// Modificar tareas
function modificarTarea(indice, nuevaTarea, nuevaFechaLimiteRecibida = null) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].nombre = nuevaTarea;
        if (nuevaFechaLimiteRecibida != null) {
            tareas[indice].fechaLimite = nuevaFechaLimiteRecibida;
        }
        console.log('Tarea modificada correctamente');
    } else {
        console.log("Índice de tarea inválido");
    }
}

// Función para mostrar menú de opciones
function Menu() {
    console.log("-------MENÚ-------");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar Tarea");
    console.log("3. Marcar Tarea Finalizada");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("0. Salir");
}

// Función para interactuar con el usuario
function InteractuarconUsuario() {
    let opcion = -1;

    while (opcion != 0) {
        Menu();
        opcion = parseInt(prompt("Ingrese una opción: "));

        switch (opcion) {
            case 1:
                let nombreTarea = prompt("Ingrese el nombre de la tarea: ");
                let fechaLimite = prompt("Ingrese la fecha límite: ");
                agregarTarea(nombreTarea, fechaLimite);
                break;
            case 2:
                let indiceAEliminar = parseInt(prompt("Ingrese el índice de la tarea a eliminar: "));
                eliminarTarea(indiceAEliminar);
                break;
            case 3:
                let indiceCompletado = parseInt(prompt("Ingrese el índice de la tarea completada: "));
                tareaCompletada(indiceCompletado);
                break;
            case 4:
                let indice = parseInt(prompt("Ingrese el índice a modificar: "));
                let tareaModificada = prompt("Ingrese el nuevo nombre de la tarea: ");
                modificarTarea(indice, tareaModificada);
                break;
            case 5:
                console.log("----Lista de Tareas----");
                console.log(tareas);
                break;
            case 0:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción inválida");
                break;
        }
    }
}

InteractuarconUsuario();
