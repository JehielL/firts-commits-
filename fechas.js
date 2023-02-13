//- La fecha de hoy
const fechaHoy = new Date
console.log(fechaHoy)

// - La fecha de tu cumpleaños

const fechaCumple = new Date(1992,01,11)
console.log(fechaCumple)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const mayorCumple = fechaHoy > fechaCumple
console.log(mayorCumple)

// - Una variable que contenga el día de tu nacimiento

const diaNacimiento = fechaCumple.getDate()
console.log(diaNacimiento)

// una variable que contenga el mes de nacimiento

const mesNacimiento = fechaCumple.getMonth()
console.log(mesNacimiento)

//una variable que contenga el año de nacimiento

const anyoNacimiento = fechaCumple.getFullYear()

console.log(anyoNacimiento)