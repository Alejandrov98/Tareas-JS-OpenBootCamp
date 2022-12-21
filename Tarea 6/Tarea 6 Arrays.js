// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
var lista_de_compras = ["Leche", "Manteca", "Huevos", "Harina", "Queso"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_de_compras.push("Aceite de Girasol")
console.log(lista_de_compras)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_de_compras.pop()
console.log(lista_de_compras)


// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
var movie1 = {
    titulo : "Harry Potter y la piedra filosofal",
    director : "Chris Columbus",
    fecha : new Date (["November 16, 2001"])
    }

var movie2 = {
    titulo : "Animales Fantasticos y donde encontrarlos",
    director : "David Yates",
    fecha  : new Date (["November 18, 2016"]) 
}

var movie3 = {
    titulo : "50 sombras de Grey",
    director : "Sam Taylor-Johnson",
    fecha  : new Date (["february 11, 2015"]) 
}

var Favorite_movies= [movie1, movie2, movie3];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

var Favorite_movies_since_2010 = Favorite_movies.filter(year => year.fecha > new Date (["January 1, 2010"]))
console.log(Favorite_movies_since_2010)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
var only_directors = Favorite_movies.map(directors => directors.director)
console.log(only_directors)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
var only_titles = Favorite_movies.map(titles => titles.titulo)
console.log(only_titles)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
var titles_and_directors = only_directors.concat(only_titles)
console.log(titles_and_directors)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
var titles_and_directors_FP = [...only_directors, ...only_titles]
console.log(titles_and_directors_FP)


