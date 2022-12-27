// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

let Alejandro_Villamayor =  {
    nombre: "Alejandro",
    apellido: "Villamayor",
    edad: 24,
    altura: 1.85,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior

let edad =  Alejandro_Villamayor.edad
console.log(edad)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let Lucas_Acuña = {
    nombre: "Lucas",
    apellido: "Acuña",
    edad: 26,
    altura: 1.75,
    eresDesarrollador: true
}
let Agustin_Coronel = {
    nombre: "Agustin",
    apellido: "Coronel",
    edad: 24,
    altura: 1.74,
    eresDesarrollador: false
}

let lista = [Alejandro_Villamayor, Lucas_Acuña, Agustin_Coronel]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

lista.sort((a, b) => a.edad - b.edad)
console.log(lista)