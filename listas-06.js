/// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listCompras = ["huevos", "leche", "carne", "zanahorias", "tomates"]
/// - Modifica la lista y añadele aceite de girasol.
listCompras.push("Aceite de girasol")
console.log(listCompras)
///- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listCompras.pop()
console.log(listCompras)
/// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
    {titulo: "Perfume de mujer", director:"Martin Brenst", año: new Date (1992, 0, 1) },
    {titulo: "Donnie Darko", director:"Richard Kelly", año: new Date (2001, 0, 1) },
    {titulo: "American Beauty", director:"Sam mendes", año:new Date(1999, 0, 1) },

]
/// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const peliculasNew = peliculasFavoritas.filter(pelicula => pelicula.año > new Date (2010, 0, 1)) 
console.log(peliculasNew)

/// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculasFavoritas.map(pelicula => {
    return pelicula.director
} )
console.log(directores)

///- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFavoritas.map(pelicula => {
    return pelicula.titulo
})
console.log(titulos)
///- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directores.concat(titulos)
console.log(directores_titulos)

/// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const directores_titulos_prop = [...directores, ...titulos]
console.log(directores_titulos_prop)