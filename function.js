function alwaysReturnTrue (){
    return true
}
async function promesaFunction(){
    return setTimeout (() => console.log ("promesa") , 5000 )

}

console.log(promesaFunction)

function* idPar(){
    let id = 0
    while (true) {
        yield id += 2
    }
}

console.log(idPar)