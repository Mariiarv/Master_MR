const semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

let palabramaslarga = semana[0]

for(let dia of semana){
    if(dia.length > palabramaslarga.length){
        palabramaslarga = dia
    }
}

console.log(palabramaslarga)


