// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre

let MiNombre= "Alejandro";

// - Otra cadena de texto con tu Apellido

let MiApellido= "Villamayor";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let Estudiante = MiNombre.concat(" ", MiApellido)
console.log(Estudiante)

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = Estudiante.toUpperCase()
console.log(estudianteMayus)

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = Estudiante.toLowerCase()
console.log(estudianteMinus)

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let contEstudiante = Estudiante.length
console.log(contEstudiante)

// - Una variable que contenga la primera letra del Nombre
let FirstLetter = MiNombre[0]
console.log(FirstLetter)

// - Otra variable que contenga la última letra del Apellido

let last_letter_lastname = MiApellido[MiApellido.length-1]
console.log(last_letter_lastname)

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

let estudiante_sin_espacios = Estudiante.split(" ").join("")
console.log(estudiante_sin_espacios)

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let are_there = Estudiante.includes("Alejandro")
console.log(are_there)
 