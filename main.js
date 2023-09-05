class Promedio {
    constructor(materia, nota1, nota2, nota3) {
        this.materia = materia
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
    }

    descripcionmateria(){
        let promedionotas = Math.round ((this.nota1+this.nota2+this.nota3) /3)
        return `En la materia ${this.materia} tiene las siguientes notas:\n Primer nota: ${this.nota1}\n Segunda nota: ${this.nota2}\n Tercer nota: ${this.nota3}\n Con el promedio de: ${promedionotas}`
    }
}

class Listadematerias {
    constructor() {
        this.listadematerias = []
    }

    agregarmaterias(materia) {
        this.listadematerias.push(materia)
    }

    mostrarmaterias() {
        let listadepromedios = ""
        this.listadematerias.forEach(materia => {
            listadepromedios = listadepromedios + materia.descripcionmateria()+"\n"
        })
        alert ( listadepromedios)
    }
}
const listadematerias = new Listadematerias()
alert("Bienvenido a la calculadora de Promedios")

do {
    let materia = prompt("Dinos cual es la materia que quieres sacar el promedio")
    let nota1 = Number(prompt("Ingrese su primer nota entre 1 y 10"))
    let nota2 = Number(prompt("Ingrese su segunda nota entre 1 y 10"))
    let nota3 = Number(prompt("Ingrese su tercer nota entre 1 y 10"))
    if ((nota1 <= 10)&&(nota2<=10)&&(nota3<=10)&&(materia!=="")){
        const materias = new Promedio (materia, nota1, nota2, nota3)
        listadematerias.agregarmaterias(materias)
    } else {
        alert("Ah ingresado notas invalidas o no ha ingresado una materia")
    }
    

    continuar = confirm("¿Quiere sacar promedios de alguna otra materia?")
} while (continuar);

listadematerias.mostrarmaterias()