// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia

const Family_names = new Set (["Marcelo", "Claudia", "Constanza", "Marina", "Alejandro", "Lucas"]);
console.log(Family_names)

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

Family_names.add("Alejandro");
console.log(Family_names)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

Family_names.add("Javascript");
console.log(Family_names)