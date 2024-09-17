const prompt = require('prompt-sync')();

// Array para almacenar tareas
let tareas = [];
let categoriasNombres = [
    "Trabajo",
    "Personal"
]
// Funcion para mostrar categorias
function categorias(){
    console.log("Categorias existentes: ")
    categoriasNombres.forEach(function(categoria, indice){
        console.log(indice + ': ' + categoria)
    })
}

//funcion que sirve para cargar nuevas categorias por el usuario
function agregarCategoria(nombreCategoria){
    categoriasNombres.push(nombreCategoria)
    console.log('Categoria' + nombreCategoria + " agregada correctamente")
}

// Función para agregar una nueva tarea al array
function agregarTarea(nombreRecibido, fechaLimiteRecibida = null) {
    categorias()

    let Ncat = parseInt(prompt("Ingresa el numero de la categoria para la nueva tarea: "))
    if(Ncat >= 0 && Ncat < categoriasNombres.length){
        tareas.push({ nombre: nombreRecibido, completada: false, fechaLimite: fechaLimiteRecibida, categoria : Ncat });
        console.log("Tarea cargada con exito!")
    }else{
        console.log("Numero de categoria incorrecto")
    }

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
function modificarTarea(indice, nuevaTarea = undefined, nuevaFechaLimiteRecibida = undefined, nuevoNumCategoria = undefined) {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].nombre = nuevaTarea !== undefined ? nuevaTarea : tareas[indice].nombre;
        tareas[indice].fechaLimite = nuevaFechaLimiteRecibida !== undefined ? nuevaFechaLimiteRecibida : tareas[indice].fechaLimite;
        tareas[indice].categoria = nuevoNumCategoria !== undefined ? nuevoNumCategoria : tareas[indice].categoria;
        console.log('Tarea modificada correctamente');
    } else {
        console.log("Índice de tarea inválido");
    }
}


// funcion que filtra tareas por categoria
function filtrarTareasxCategoria(numCategoria){
    return tareas.filter(function(tarea){
        return tarea.categoria === numCategoria
    });
}


// Funcion que muestra cant de tareas completadas
function contarTareasCompletadas(numCategoria){
    let tareasCategoria = filtrarTareasxCategoria(numCategoria)
    let tareasCompletadas = tareasCategoria.reduce(function(contador, tarea){
        return tarea.completada ? contador + 1 : contador
    }, 0)

    let tareasEnTotal = tareasCategoria.length

    console.log("Tareas completadas de la categoria " + numCategoria + ": " + tareasCompletadas + " de " + tareasEnTotal + " tareas!")
}

function mostrarTareasNoComp(){
    console.log("Tareas no completadas: ");
    tareas.forEach(function(tarea){
        if(!tarea.completada){
            let fechaLimiteMostrar = tarea.fechaLimite ? tarea.fechaLimite : "Sin fecha límite";
            console.log(" - Nombre: " + tarea.nombre + ", Fecha Límite: " + fechaLimiteMostrar + ", Categoría: " + categoriasNombres[tarea.categoria]);
        }
    });
}

// Función para ordenar tareas por la propiedad 'nombre' con BubbleSort
function ordenarTareasXNombre(){
    let total = tareas.length;

    for(let j = 0; j < total; j++){
        for(let i = 0; i < total - 1; i++){ // Cambiado a total - 1
            if(tareas[i].nombre > tareas[i+1].nombre){
                let temp = tareas[i];
                tareas[i] = tareas[i+1];
                tareas[i+1] = temp;
            }
        }
    }
}

// Función para ordenar tareas por la propiedad 'fechaLimite' con BubbleSort
function ordenarTareasXFechaLimite(){
    let total = tareas.length;

    for(let j = 0; j < total; j++){
        for(let i = 0; i < total - 1; i++){ // Cambiado a total - 1
            if(tareas[i].fechaLimite > tareas[i+1].fechaLimite){
                let temp = tareas[i];
                tareas[i] = tareas[i+1];
                tareas[i+1] = temp;
            }
        }
    }
}

// Funcion que busca una tarea por nombre y retorna su posicion
function buscarTareaXNombre(nombreTarea) {
    let inicio = 0;
    let fin = tareas.length - 1;

    while (inicio <= fin) {
        let posElementoMedio = Math.floor((inicio + fin) / 2);

        if (tareas[posElementoMedio].nombre === nombreTarea) {
            return posElementoMedio;
        } else if (tareas[posElementoMedio].nombre < nombreTarea) {
            inicio = posElementoMedio + 1;
        } else {
            fin = posElementoMedio - 1;
        }
    }

    return -1;
}

// Función para mostrar menú de opciones
function Menu() {
    console.log("-------MENÚ-------");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar Tarea");
    console.log("3. Marcar Tarea Finalizada");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tareas");
    console.log('6. Mostrar Categorias')
    console.log('7. Agregar nueva Categoria')
    console.log('8. Filtrar Categorias')
    console.log('9. Visualizar cantidad de tareas completadas por categoria')
    console.log('10. Visualizar cantidad de tareas no completadas')
    console.log('11. Ordenar las tareas alfabeticamente')
    console.log('12. Ordenar las tareas por fecha limite')
    console.log('13. Buscar una tarea por su nombre')
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
                console.log("----Lista de Tareas----");
                tareas.forEach(function(tarea, index) {
                    console.log(index + ": " + tarea.nombre + " (Fecha límite: " + tarea.fechaLimite + ", Categoría: " + categoriasNombres[tarea.categoria] + ")");
                });
                let indice = parseInt(prompt("Ingrese el índice a modificar: "));
                if (indice >= 0 && indice < tareas.length) {
                    let opcionMod = parseInt(prompt("---¿Qué propiedad desea modificar? 1. Nombre | 2. Fecha Límite | 3. Categoría ---"));
                    switch (opcionMod) {
                        case 1:
                            let newName = prompt("Ingrese el nuevo nombre de su tarea: ");
                            modificarTarea(indice, newName);
                            break;
                        case 2:
                            let newDate = prompt("Ingrese la nueva fecha límite de su tarea: ");
                            modificarTarea(indice, undefined, newDate);
                            break;
                        case 3:
                            let newCat = parseInt(prompt("Ingrese el nuevo número de su categoría: "));
                            if (newCat >= 0 && newCat < categoriasNombres.length) {
                                modificarTarea(indice, undefined, undefined, newCat);
                            } else {
                                console.log("Número de categoría incorrecto.");
                            }
                            break;
                        default:
                            console.log("Opción inválida.");
                    }
                } else {
                    console.log("Índice de tarea incorrecto");
                }
                break;                
            case 5:
                console.log("----Lista de Tareas----");
                console.log(tareas);
                break;
            case 6:
                console.log("----Lista de Categorias----");
                categorias()
                break;
            case 7:
                let nuevaCategoria = prompt("Ingrese el nombre de la nueva categoria: ")
                agregarCategoria(nuevaCategoria)
                break;
            case 8:
                categorias();
                let nroCategoria = parseInt(prompt("Ingrese el número de la categoría a filtrar: "));
                let tareasCategoria = filtrarTareasxCategoria(nroCategoria);
                console.log("Tareas de la categoría seleccionada: ");
                tareasCategoria.forEach(function(tarea) {
                    console.log(" - Nombre: " + tarea.nombre + ", Completada: " + (tarea.completada ? "Sí" : "No"));
                });
                break;
            case 9:
                categorias()
                let nroCat = parseInt(prompt("Ingrese el numero de la categoria a visualizar: "))
                contarTareasCompletadas(nroCat)
                break
            case 10:
                mostrarTareasNoComp()
                break
            case 11:
                ordenarTareasXNombre()
                console.log("---Tareas por Nombre---")
                console.log(tareas)
                break
            case 12:
                ordenarTareasXFechaLimite()
                console.log("---Tareas por Fecha---")
                console.log(tareas)
                break
            case 13:
                ordenarTareasXNombre()
                let nombreAbuscar = prompt("Ingrese el nombre de la tarea a buscar: ")
                let indicetarea = buscarTareaXNombre(nombreAbuscar)
                
                if(indicetarea !== -1){
                    console.log('Tarea encontrada en el indice: ' + indicetarea)
                } else {
                    console.log("Tarea no encontrada")
                }
                break
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
