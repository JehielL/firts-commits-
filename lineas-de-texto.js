let nombre = "Jehiel"
let apellido = "Linarez"
// eslint-disable-next-line no-unused-vars
let profesion = "cocinero"
let estudiante = nombre.concat(" ").concat(apellido) 

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

console.log(estudianteMayus)
console.log(estudianteMinus)

let estudianteLenght = estudiante.length

console.log(estudianteLenght)

let inicialNombre = nombre.substring(0, 1)

console.log(inicialNombre)

let finalApellido = apellido.substring(apellido.length -1, apellido.length)

console.log(finalApellido)

let estudianteSinEspacios = estudiante.replace(/ /g,"")

console.log(estudianteSinEspacios)

let nombreEnEstudiante = estudiante.includes("Jehiel")

console.log(nombreEnEstudiante)
