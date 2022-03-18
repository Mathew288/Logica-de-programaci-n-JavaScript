//! 18) Programa una función que dada una cadena de texto cuente el número de
//!  vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4,
//!  Consonantes: 5.

export const contarConsonantesYVocales = (texto = "") =>{
    let vocales = 0;
    let consonantes = 0;

    for (let letra of texto) {
        if(/[AEIOUaeiouÁÉÍÓÚáéíóú]/.test(letra)){
            vocales++;
        }
    }
    
    for (let letra of texto) {
        if(/[qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBN]/.test(letra)){
            consonantes++;
        }
    }
    return console.log("En la cadena '"+texto+"' se han encontrado "+vocales+" vocales"+
    " y "+consonantes+" consonantes.");   
}

//! 19) Programa una función que valide que un texto sea un nombre válido,
//!  pe. miFuncion("Jonathan MirCha") devolverá verdadero.

export const validarTexto = (texto = "") =>{

    if((/\d/).test(texto)){
        return console.log("No pueden haber números en el nombre");
    } else{
        return console.log("Se ha validado el nombre correctamente");
    }
}

//! 20) Programa una función que valide que un texto sea un email válido,
//!  pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

export const validarCorreo = (correo) =>{
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (emailRegex.test(correo)) {
        return console.log("Validado correctamente");
      } else {
        return console.log("Incorrectamente");
      }
}