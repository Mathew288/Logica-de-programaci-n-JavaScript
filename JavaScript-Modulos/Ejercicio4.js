//! 12) Programa una función que determine si un número es primo (aquel 
//! que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) 
//! devolverá true.


export const esPrimo = (numero) =>{
	if (numero == 0 || numero == 1 || numero == 4) return false;
    // El 4 lo manejo así porque es un caso especial para el algoritmo
    // , ya al dividir 4 entre 2, el ciclo no se cumple y por lo tanto 
    // se diría que el 4 sí es primo, cosa que es errónea.
	for (let i = 2; i < numero / 2; i++) {
		if (numero % i == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}


//! 13) Programa una función que determine si un número es par o 
//! impar, pe. miFuncion(29) devolverá Impar.

export const esPar = numero => (numero%2===0)?true:false;



//! 14) Programa una función para convertir grados Celsius a Fahrenheit y
//! viceversa, pe. miFuncion(0,"C") devolverá 32°F.

export const convertirTemperatura = (grados,tipo) => {
    if(tipo.toUpperCase() === "C"){
        grados = (grados * 9/5) + 32;
        return `${grados} °C`;
    } else if(tipo.toUpperCase() === "F"){
        grados = (grados -32) * 5/9;
        return `${grados} °F`;
    }
}