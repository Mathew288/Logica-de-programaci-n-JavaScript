// 1) Programa una función que cuente el número de caracteres de una cadena de 
//texto, pe. miFuncion("Hola Mundo") devolverá 10.

export function ContarCadena(parametro = Object){
    if(typeof parametro === 'string' || parametro instanceof String){
        console.log("String con longitud: ",parametro.length);

    } else if (typeof parametro === 'number' || parametro instanceof Number){
        parametro = parametro.toString();
        console.log("Es un número con longitud: " + parametro.length);
    }
}

/*2) Programa una función que te devuelva el texto recortado según el número de
 caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

 export function SepararCadena(parametro = Object, separar = Number){
    if(typeof parametro === 'string' || parametro instanceof String){
        let auxiliar = "";
        for (let i = 0; i <= separar - 1; i++) {
            auxiliar = auxiliar + parametro[i];
        }
        console.log(auxiliar);

    } else if (typeof parametro === 'number' || parametro instanceof Number){
        parametro = parametro.toString();
        let auxiliar = "";
        for (let i = 0; i <= separar - 1; i++) {
            auxiliar = auxiliar + parametro[i];
        }
        console.log(auxiliar);                                                       
    }
 }
/*3) Programa una función que dada una String te devuelva un Array de textos
 separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá
  ['hola', 'que', 'tal']. */

  export function stringToArray(palabra,separacion){
    palabra = palabra.split(separacion);
    console.log(palabra);    
  }

  /*4) Programa una función que repita un texto X veces, 
  pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo 
  Hola Mundo. */

  export function Repetir(cadena,veces){
      console.log(cadena.repeat(veces));
  }