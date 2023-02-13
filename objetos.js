//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)//

const datosPersonales = {
    nombre: "Jehiel",
    apellido: "linarez",
    edad: 31,
    altura: 171,
    eresDeveloper: true
}
//- Una variable que obtenga tu edad a partir del objeto anterior//
const edadVar = datosPersonales.edad
console.log(edadVar)

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s//

const lista = [
    {...datosPersonales},
    {nombre:"maria",
    apellido: "Asuaje",
    edad:32,
    altura: 151,
    eresDeveloper: true},

    {nombre: "jose Manuel",
    apellido: "asuaje",
    edad: 11,
    eresDeveloper: false},    
]
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor //
const listaOrden = lista.sort((a,b) => b.edad - a.edad)
console.log(listaOrden)