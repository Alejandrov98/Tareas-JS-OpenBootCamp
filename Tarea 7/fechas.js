// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
let fecha_de_hoy = new Date
console.log(fecha_de_hoy)

// - La fecha de tu nacimiento
let Mi_Fecha_de_nacimiento = new Date ("April 14, 1998")
console.log(Mi_Fecha_de_nacimiento)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let is_latter =  fecha_de_hoy > Mi_Fecha_de_nacimiento
console.log(is_latter)

// - Una variable que contenga el día de tu nacimiento

let dia = Mi_Fecha_de_nacimiento.getDate()
console.log(dia)

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

let mes= Mi_Fecha_de_nacimiento.getMonth() //abril
console.log(mes)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let año = Mi_Fecha_de_nacimiento.getFullYear()
console.log(año)