import { invertirCadena } from "./Ejercicio2.js";
/*
! 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
export function numeroRandom(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}


/*
!10) Programa una función que reciba un número y evalúe si es capicúa o no 
!(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá 
!true.
*/

export const Capicua = (numero = undefined) => {
    numero = numero.toString();
    if(numero === invertirCadena(numero)){
        return true;
    } else {
        return false
    }
}


/*
 !11) Programa una función que calcule el factorial de un número
 !(El factorial de un entero positivo n, se define como el producto de
 !todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5)
 ! devolverá 120.
*/
export const Factorial = (n = undefined) => {
    if(n === 1 || n===0){
        return 1;
    } else if (n ===undefined){
        return "No existe"
    } else {
        return n * Factorial(n-1);
    }
}