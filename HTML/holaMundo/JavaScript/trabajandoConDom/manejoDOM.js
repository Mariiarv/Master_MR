
// Ejercicio 1. Numero de enlaces de la página.En total hay 6 enlaces

let enlaces = document.getElementsByTagName('a')

console.log(enlaces.length)


// Ejercicio 2. Direccion a la que enlaza el penultimo enlace-.


let penultimoEnlace = enlaces[enlaces.length - 2]

direccionPenultimoEnlace = penultimoEnlace.href

console.log("Dirección del penúltimo enlace: " + direccionPenultimoEnlace)

// Ejercicio 3. Numero de enlaces del tercer parrafo.

let tercerParrafo = document.getElementById('thirdparagraph');

let enlacesDelTercerParrafo = tercerParrafo.querySelectorAll('a');

console.log("Número de enlaces en el tercer párrafo: " + enlacesDelTercerParrafo.length)

// Pinta los resultados al final de la pagina utilizando innerHTML y creando un nodo.


let elementoClase = document.getElementsByClassName('.resultado')
let body = document.getElementsByTagName('body')

console.log(body)

elementoClase.innerHTML = 'El número de enlaces de la página es: ${enlacesDelTercerParrafo}'

// 

let animalFavorito = prompt("¿Cúal es tu animal favorito?")

let miAnimalFavorito = "ardilla"

if (animalFavorito.toLowerCase() === "ardilla") {
    console.log("%c Wow! mi animal favorito también es ese!", "color: green");
} else {
    (animalFavorito.toLowerCase() != "ardilla"); {
    console.log("%c Ohh! mi animal favorito es otro!","color: red")
      }      
}





