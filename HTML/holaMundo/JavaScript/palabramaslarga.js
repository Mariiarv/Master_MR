// const semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

// let palabramaslarga = semana[0]

// for(let dia of semana){
//     if(dia.length > palabramaslarga.length){
//         palabramaslarga = dia
//     }
// }

// console.log(palabramaslarga)


// let cumpleanos = {
//     dia: 22,
//     mes: "octubre"
// }

// // Crear un array y buscar la segunda posicion

// console.log(`El dia de mi cumpleaños es el ${cumpleanos.dia} de ${cumpleanos.mes}`)

// let arrayCumpleanos = ['24 Junio', '4 Noviembre', '1 Mayo']

// console.log(arrayCumpleanos)

// console.log(arrayCumpleanos[1])

// // mi cumpleaños no es mayor que 23

// if(cumpleanos.dia === 1 || cumpleanos.mes === 'mayo'){
//     console.log(`El dia de mi cumpleaños es ${cumpleanos.dia} de ${cumpleanos.mes}`)
// }

// // si el primer numero es mayor que el segundo. SUma los dos numero y denuestralo por consola.

// let numero1 = 12
// let numero2 = 11

// if(numero1 > numero2){
//     let suma = numero1 + numero2
//     console.log(suma)
// }

// // si el primer numero no es mayor que el segundo hazme la resta

// let numeroUno = 5
// let numeroDos = 11

// if(numeroUno > numeroDos){
//     let suma = numeroUno + numeroDos
//     console.log(suma)
// }{
//     let resta = numeroDos -numeroUno
//     console.log(resta)
// }
// // Letra DNI. Prompt

// let arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

// let numeroDNI = prompt()

// if(numeroDNI > 0 && numeroDNI< 99999999){
//     let cociente = numeroDNI % 23
//     let letraDNI = arrayLetras[cociente]
//     console.log(letraDNI)
// }else{
//     alert('El numero que has intrtoducido no vale tiene que estar entre 0 y 99999999')
// }

// // -------------------------------------------------
// let posicionInicial = 0

// for(posicionInicial; posicionInicial < 5;posicionInicial++){
//     console.log(posicionInicial)
// }
// // Imprime la letra D

// let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

// for(let letra of letrasDNI){
//     if (letra === 'D')
//     console.log(letra)
// }

// // Imprime el orden de la letra D

// for (let posicion in letrasDNI){
//     if (letrasDNI[posicion] = 'D')
//     console.log(posicion)
// }

// // Imprime ela letra en la posicion 5

// for (let letra1 in letrasDNI){
//     if (letra1 === 5)
//     console.log(posicion)
// }
// //  a partir de la letra D que no salga

// for  (let letra in letrasDNI){
//     console.log(letra)
//     if (letra === 'D'){
//         break
//     }
// }

let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

for(let letra of letrasDNI){
    console.log(letra)
    if (letra === 'D'){
        console.log('como me gusta la letra ' + letra)
    }
}

