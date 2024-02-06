// const nombres = ['Miguel', 'Javier', 'Maria', 'Juan', 'Guille', 'Miguel Angel']

// for (let nombre of nombres){
//     console.log(nombre)
// }

// // metodo funcional de tipos de dato array

// let nuevoArray = nombres.map(function enMayusculas(palabra){
//     palabra = palabra.toUpperCase()
//     return palabra
// })

// console.log(nuevoArray)

// elimina la primera letra de cada palabra y une lo restante

function palabraSinPrimera(pal1,pal2){
    let pal1Sin = pal1.substring(1)
    let pal2Sin = pal2.substring(1)
    let concatenar = pal1Sin.concat(pal2Sin)
    console.log(concatenar)
}

palabraSinPrimera('Margarita','flor')


// Invertir cadena de texto

function invertirPalabra(palabra){
    let letras = palabra.split('')
    let invertidasLetras = letras.reverse()
    let invertida = invertidasLetras.join('')
    return invertida 
}
    
console.log(invertirPalabra('maria tiene una casa'))

// buscar las vocales de una palabra

function numeroVocales(palabra){
    let letrasArray = palabra.split('')
    let contador = 0
    let vocales = ['a','e','i','o','u']

    for (let letra of letrasArray){
        for(let vocal of vocales){
            if(letra === vocal){
                contador++
            }
        }
    }
    return contador
}

console.log(numeroVocales('Hola hasta mañana'))

// // dime las vocales
// var palabra = 'mariposa'

// for (var i = 0; 1 < palabra.length; i++){
//     if(palabra.charAt(i) == 'a'||palabra.charAt(i) == 'e'||palabra.charAt(i) == 'i'||palabra.charAt(i) == 'o'|| palabra.charAt(i) == 'u')
//     console.log(palabra.charAt(i) )
// }

// console.log(palabra)



