for(let i = 0; i < 3; i++){
    console.log(i)
}

const semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
for (let dia of semana){
    if (dia === 'Sabado'){
        break
    }
    console.log(dia)
}

for (let dia in semana){
    console.log(dia)
}