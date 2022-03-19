
//! 21) Programa una función que dado un array numérico devuelve otro array con 
//! los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá 
//! [1, 16, 25].

export const elevarArray = (arreglo = []) => {
    for (var i in arreglo) {
        arreglo[i] = Math.pow(arreglo[i],2);
    }
    console.log(arreglo)
  
}
//! 22) Programa una función que dado un array devuelva el número
//!  mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) 
//!  devolverá [99, -60].

export const maxMinArray = (arreglo = []) => {
    let valorMaximo = Math.max(...arreglo);
    console.log("Valor máximo: ",valorMaximo);

    let valorMinimo = Math.min(...arreglo);
    console.log("Valor mínimo: ",valorMinimo);
}


//! 23) Programa una función que dado un array de números devuelva un objeto con 
//! 2 arreglos en el primero almacena los números pares y en el segundo los 
//! impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0],
// !     impares: [1,3,5,7,9]}.

export const objetoDeParesEImpares = (arreglo = []) => {

    const objeto = {
        pares:[],
        impares:[]
    }

    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] % 2 === 0){
            objeto.pares.push(arreglo[i]);
        } else if (arreglo[i] % 2 !== 0){
            objeto.impares.push(arreglo[i]);
        }
        
    }
    console.log("Pares: ", objeto.pares);
    console.log("Impares: ",objeto.impares);

}
