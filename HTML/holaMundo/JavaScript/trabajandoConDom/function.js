
let elementoBoton = document.getElementById('leer mas')

let elementoP = document.getElementsByTagName('section')



console.log(elementoBoton)

console.log(elementoP)

// para saber cual es la propiedad de la clase del encabezado

// seleccionar todas las secciones

let secciones = document.querySelectorAll('section')

console.log(secciones)


let enlace = document.createElement('a')

enlace.href = 'https://developer.mozilla.org/es/'

console.log(enlace)


// crear un parrafo con un texto

let parrafoNuevo = document.createElement('p')

let nodoTexto = document.createTextNode('Hola Buenos Días')

parrafoNuevo.appendChild(nodoTexto)

console.log(parrafoNuevo)

// Añadir parrafo nuevo en la descripcion

let seccionDescripcion =document.querySelector('.descripcion')

seccionDescripcion.appendChild(parrafoNuevo)

enlace.innerHTML ='Enlace al documento'

seccionDescripcion.appendChild(enlace)


// Encontrar enlace de la imagen de arcgispro como no es ni un id ni una clase le llamaremos por selector

let imagen = document.querySelector("img")

console.log(imagen.getAttributeNames())

console.log(imagen.getAttribute('src'))

imagen.setAttribute('source','https://www.google.com/url?sa=i&url=https%3A%2F%2Fdh.library.virginia.edu%2Ftool%2Farcgis&psig=AOvVaw0rf6M6AJcU_qh6wTG4q3ij&ust=1707408186718000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCM-KXNmYQDFQAAAAAdAAAAABAE')

// Modo oscuro del encabezado

let elementoClase = document.getElementsByClassName('encabezado')

let encabezado = elementoClase[0]

console.log(encabezado.classList)

encabezado.classList.add('oscuro')

console.log(encabezado.classList)

encabezado.classList.remove('oscuro')

