//* Ejercicio 1

function obtenerElementos(pila, numero) {
    // Verifica si el número es mayor que la longitud de la pila
    if (numero > pila.length) {
        console.log("El número es mayor que la longitud de la pila. Retornando toda la pila.");
        return pila;
    } else {
        return pila.slice(0, numero); //.slice(), el 0 representa desde donde queremos que sea el INICIO dentro del array, y el NUMERO (definido por nosotros) indica el elemento FINAL que queremos que se represente con base al array
    }
}

const resultado = obtenerElementos(['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'], 4) //El número define hasta donde va a llegar el array (FINAL)
console.log(resultado);

console.log("Fin del ejercicio 1")

//* Ejercicio 2

function reemplazar(pila, nuevo, viejo) {
    // Encuentra el índice del primer elemento 'viejo' en la pila
    const indice = pila.lastIndexOf(viejo); // .lastIndexOf: Toma el último valor de la propiedad en caso de que haya varios números similares.

    // Recuerda que el -1 se toma cómo FALSE
    // Si el elemento existe, reemplázalo con 'nuevo'
    if (indice !== -1) { 
        pila[indice] = nuevo;
        // Hace pop de los elementos más nuevos que el reemplazado
        return pila.slice(0, indice + 1);
    }

    // Retorna la pila original si 'viejo' no se encuentra
    return pila;
}

const resultado2 = reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2) 

/**
 * [] = pila
 * nuevo = 7
 * viejo = 2 Tomó el último 2, ya que hay varios que se repiten dentro del arreglo, .lastIndexOf se encarga de tomar el último valor
 */
//? Investigar porque se eliminan los números después de que se haya hecho el reemplazo.

console.log(resultado2);

console.log("Fin del ejercicio 2")

//! Ejercicio 3, investigar cómo y por qué funciona

function mostrarCaminoIdaYVuelta(origen, destino, pueblos) {
    // Construye el camino de ida
    let caminoIda = [origen, ...pueblos, destino];
    // Son como decir "voy a mencionar varios lugares seguidos aquí", así que pones "pueblo 1" y "pueblo 2" en la lista sin tener que escribirlos uno por uno
    // Construye el camino de vuelta, que es el camino de ida al revés, excepto el destino y el origen
    let caminoVuelta = [...caminoIda.slice(1, caminoIda.length - 1).reverse(), origen]
    // Aquí esta dejando fuera "origen" y "destino", solo tenemos "pueblo 1" y "pueblo 2", lo que hace el valor de .reverse() es invertir los valores restantes, esto quiere decir "pueblo 2" y "pueblo 1"
    // El 1 es para indicar que empiece desde el segundo elemento del array que son los pueblos, dejando el valor inicial del array ("0" / "origen"), fuera del efecto de está linea de código
    // El -1 es para indicar que debe terminar antes de que llegue al último elemento del arreglo, en este caso 
    // Muestra el camino de ida
    console.log("Recorrido: " + caminoIda.join(" → "));

    // Muestra el camino de vuelta
    console.log("Regreso: " + destino + " → " + caminoVuelta.join(" → "));
}

// Ejemplo de uso
mostrarCaminoIdaYVuelta("Pueblo Origen", "destino", ["pueblo 1", "pueblo 2"])

console.log("Fin del ejercicio 3")

//* Ejercicio 4

function retirarContenedor(pilaContenedores, idContenedor) {
    let pilaTemporal = [];

    // Mueve los contenedores a una pila temporal hasta encontrar el contenedor deseado
    while(pilaContenedores.length > 0 && pilaContenedores[pilaContenedores.length - 1] !== idContenedor) {
        pilaTemporal.push(pilaContenedores.pop());
    }

    // Verifica si el contenedor deseado fue encontrado
    if(pilaContenedores.length === 0) {
        console.log("El contenedor con ID " + idContenedor + " no se encuentra en la pila.");
        // Regresa los contenedores a su lugar original si el contenedor deseado no se encontró
        while(pilaTemporal.length > 0) {
            pilaContenedores.push(pilaTemporal.pop());
        }
    } else {
        // Retira el contenedor deseado
        console.log("Retirando el contenedor con ID " + pilaContenedores.pop());
        // Regresa los contenedores a la pila original
        while(pilaTemporal.length > 0) {
            pilaContenedores.push(pilaTemporal.pop());
        }
    }
}

// Ejemplo de uso
let pilaContenedores = [1, 2, 3, 4, 5]; // La pila de contenedores
retirarContenedor(pilaContenedores, 3); // El ID del contenedor que se desea retirar
console.log("Estado final de la pila de contenedores:", pilaContenedores);

console.log("Fin del ejercicio 4")

