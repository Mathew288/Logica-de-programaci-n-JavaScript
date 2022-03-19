/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
id de la película en IMDB, titulo, director, año de estreno, país o países de 
origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

*Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy,
*Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, 
*Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, 
*Sport, Talk-Show, Thriller, War, Western.

*/

export class Pelicula{
    constructor(id="",titulo="", director="",yearEstreno=undefined, 
    paisOrigen=[],generos=[],calificacionIMF=undefined){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.yearEstreno = yearEstreno;
        this.paisOrigen = paisOrigen;
        this.generos = generos;
        this.calificacionIMF = calificacionIMF;

        if(id===""||titulo===""||director===""||yearEstreno===undefined||
        paisOrigen===""||generos===""||calificacionIMF===0){
            alert("Todos los parámetros deben ser completados.");
        } 

        let generosPermitidos = ["Acción","Aventura","Adultos","Animación",
        "Biografía","Comedia","Crímen","Documental","Drama","Familiar","Fantasía",
        "Film","Historia","Terror","Musical","Misterio","Noticias","Reality;show",
        "Romance","Thriller","Guerra"];

        //TODO: Validando el ID de la película --------------------------------
        //Expresion regular para validar el ID
        let idregEx = /^[a-zA-z]{2}\d{7}$/gim;
        if(idregEx.test(id)){
            alert("Id: validado correctamente.");

        } else {
            alert("El id debe tener 9 caracteres, debe iniciar con",
            " dos letras, y seguido de 7 números.");
        }

        //TODO: Validando el título de la película --------------------------------
        let tituloRegEx = /[a-zA-Z]{1,100}\s?/gim;
        if(tituloRegEx.test(titulo)){
            alert("Título: validado correctamente.");
        } else {
            alert("El título no debe tener mas de 100 caracteres.");
        }

        //TODO: Validando el nombre del director/a--------------------------------
        let directorRegEx = /[a-zA-Z]{1,50}\s?\b/gim;
        if(directorRegEx.test(director)){
            alert("Nombre del director: validado correctamente.");
        } else {
            alert("El nombre del director no puede contener números, y no"+
            " debe sobrepasar los 50 caracteres.");
        }

        //TODO: Validando el año de estreno--------------------------------
        let yearEstrenoRegEx = /^\d{4}$/gim;
        if(yearEstrenoRegEx.test(yearEstreno)){
            alert("Año de estreno: validado correctamente.");
        } else {
            alert("El año no puede tener más de 4 dígitos.");
        }

        //TODO: Validando el país de origen--------------------------------
        if(paisOrigen===[]){
            alert("El país de origen no puede estar vacio.");
        } else if(Array.isArray(paisOrigen)){
            console.log("País de origen: validado correctamente.");
        }else{
            alert("El parámetro del país de origen tiene que ser " +
            "introducido en arreglo");
        }
        //Todo: Validando los géneros --------------------------------
        let hayGenero = false;
        for (let i = 0; i < generosPermitidos.length; i++) {
            if(generosPermitidos[i].includes(generos)){
                alert("Nombre del género validado correctamente.");
                hayGenero = true;
                break;
            }
        }
        if(generos===[]){
            alert("El género/géneros no puede estar vacio.");
        } else if(Array.isArray(generos) && hayGenero){
            alert("Géneros: validado correctamente.");
        } else {
            alert("El parámetro del género tiene que ser introducido en "+
            "arreglo y tiene que coincidir con un género anteriormente mostrado.");
        }

        //todo: Validar calificación
        // let calificaciónRegEx = /^\d{1}\D\.?,?\d{1}$/gim;
        if(calificacionIMF <= 10 && calificacionIMF >=0){
            alert("Calificación: Validada correctamente");
        } else if (typeof calificacionIMF !== 'number'){
            alert("La calificación tiene que ser un número del 0-9",
            " y debe tener soloun decimal (si es que lo tiene). ")
        } else {
            alert("La calificación tiene que ser un número del 0-9",
            " y debe tener soloun decimal (si es que lo tiene). ");
        }   

    }

    static mostrarGenerosAceptados(){
        console.info(` \t\t\tGéneros permitidos:\n
        "Acción","Aventura","Adultos","Animación","Biografía","Comedia",
        "Crímen","Documental","Drama","Familiar","Fantasía","Film","Historia",
        "Terror","Musical","Misterio","Noticias","Reality;show","Romance",
        "Thriller","Guerra"`);
    }
    getFichaTecnica(){
        console.info(
        "\n\tFICHA TÉCNICA DE LAPELÍCULA",this.titulo,"\n\n",
        "ID: ",this.id,"\n",
        "Título: ",this.titulo,"\n",
        "Nombre del director: ",this.director,"\n",
        "Año de estreno: ",this.yearEstreno,"\n",
        "País/es de origen: ",this.paisOrigen,"\n",
        "Género/s :",this.generos,"\n",
        "Calificación: ",this.calificacionIMF,"\n"
        );
    }
    

}