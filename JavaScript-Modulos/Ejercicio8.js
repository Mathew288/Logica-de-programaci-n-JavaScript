//! 24) Programa una función que dado un arreglo de números devuelva un objeto con 
//! dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el 
//! segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: 
//! [5,6,7,7,8], desc: [8,7,7,6,5] }.

export const ordenarArray = (arreglo = []) => {
    const ordenados = {
        ascendente:[],
        desdencente:[],
    }
    ordenados.ascendente = arreglo;
    ordenados.desdencente = arreglo;

    console.log("Ascendente: ",ordenados.ascendente.sort());
    console.log("Descendente: ", ordenados.desdencente.sort().reverse());

}



//! 25) Programa una función que dado un arreglo de elementos, elimine los 
//! duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá 
//! ["x", 10, 2, "10", true].

export const borrarDuplicados = (arreglo = []) => {

    let dataArray = new Set(arreglo);
//  El objeto global Set es una estructura de datos, una colección 
// de valores que permite sólo almacenar valores únicos de cualquier tipo, 
// incluso valores primitivos u referencias a objetos.
// Es posible iterar sobre los elementos en el orden de inserción

    let resultado = [...dataArray];
    console.log(resultado);
}



//! 26) Programa una función que dado un arreglo de números obtenga el promedio, 
//! pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

export const calcularPromedio = (arreglo = []) => {
    let promedio = 0; 
    // Se inicializa la variable con cero para que el JS sepa
    //que se trata de un número
    
    for (let i = 0; i < arreglo.length; i++) {
        promedio = promedio + arreglo[i];
    }
    promedio = promedio/arreglo.length;
    console.log("Promedio: ", promedio);
}