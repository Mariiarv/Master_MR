// Voy a poner una alerta

var largura=16
var anchura=23
var altura=13

console.log(largura*anchura*altura)

let coloresfavoritos = ['Verde','Violeta','Blanco','Azul', 'Rosa']

console.log(coloresfavoritos[1])

coloresfavoritos = ['Verde','Violeta','Blanco','Azul', 'Ros','Negro']

console.log(coloresfavoritos)

// uso de operadores

let nombreEquipo ='Rayo Vallecano'

let frase =`Mi equipo favorito es: ${nombreEquipo}`

console.log(frase)

console.log('5'==5)
console.log('5'===5)

if (altura === 12){
    console.log('Hola!!')
}else if(anchura === 2){
    console.log('condicion2')
}else{
    console.log('No es ni una ni la otra')
}

const numero1 = 3
const numero2 = 8
var suma = 'numero1 + numero2'
var multiplicacion= (8 * 3)
let incremento = 3;
++incremento;

if (numero1 > numero2){
    let suma = numero1 + numero2
    console.log(`La suma es:${suma}`)
}else if(numero2 !== 0){
    let multiplación = numero2 * 3
    console.log(`La multiplación es: ${multiplicacion}`)
}else if(incremento >= 2){
    let Diferencia =numero2 - numero1
    console.log(`Determinas cuanto deberias sumarle al valor del numero 1`)
}

let var1 = 2025

if(var1 % 4 !== 0){
    console.log(`El año ${var1} es bisiesto`)
}else if(var1 % 100 !== 0){
    console.log(`El año ${var1} es bisiesto`)
}else if(var1 % 400 === 0){
    console.log(`El año ${var1} es bisiesto`)
}else{
    console.log('No es bisiesto :(')
}


let num1 = 30
let num2 = 80



if(100- num1 < 100- num2){
    console.log(`El número más proximo entre dos valores es ${resultado}`)
}else{
    console.log(`El número más proximo entre dos valores es ${resultado}`)
}