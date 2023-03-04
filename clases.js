class Estudiante {
    nombre = "Jehiel"
    asignaturas = ["Javascript", "HTML", "CSS"]

    getDatos() {
        return this.nombre,this.asignaturas
        }
    }

const estudiante = new Estudiante()
console.log(estudiante)
console.log(estudiante.getDatos)
