/* 
!5) Programa una función que invierta las palabras de una cadena de texto
!, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

export const invertirCadena = (cadena = "") => {
    if(cadena === ""){
        console.info("La cadena está vacia");
    } else {
        return cadena.split("").reverse().join("");
        
        //TODO: Split("") toma todos los caracteres de la cadena y los transforma en 
        //TODO: un array. reverse() invierte el orden del array. join("") unirá
        //TODO: todos los caracteres invertidos por la funcion reverse 
    }
}


// !6) Programa una función para contar el número de veces que se repite una 
// !palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") 
// !devolverá 2.

export const palabrasRepetidas = (texto,palabraRepetida) =>{
    let expresionRegular = new RegExp(palabraRepetida, "ig");
    console.log(texto.match(expresionRegular));
}


// !7) Programa una función que valide si una palabra o frase dada, es un 
// !palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") 
// !devolverá true.

export const esPalindromo = (palabra) => {
    if(palabra===invertirCadena(palabra)){
        return true;
    } else {
        return false;
    }
}

//! 8) Programa una función que elimine cierto patrón de caracteres de un texto 
// !dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
// !devolverá  "1, 2, 3, 4 y 5.

export const eliminarCaracteres = (texto,patron_a_eliminar) => {
    
    texto  = texto.replaceAll(patron_a_eliminar,'');
    console.log(texto);
}
