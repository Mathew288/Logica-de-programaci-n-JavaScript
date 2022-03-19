// import { ContarCadena, SepararCadena
// ,stringToArray, Repetir } 
// from "./Ejercicio1.js";

// import {invertirCadena, palabrasRepetidas,
// esPalindromo, eliminarCaracteres} 
// from "./Ejercicio2.js";

// import {numeroRandom,Capicua,Factorial }
// from "./Ejercicio3.js";

// import {esPrimo, esPar,convertirTemperatura} 
// from "./Ejercicio4.js";

// import {calcularDescuento, Years} 
// from "./Ejercicio5.js";

// import {contarConsonantesYVocales, validarTexto, validarCorreo} 
// from "./Ejercicio6.js";

// import {maxMinArray, objetoDeParesEImpares} from "./Ejercicio7.js";
// import {ordenarArray, borrarDuplicados, calcularPromedio} from "./Ejercicio8.js";
import {Pelicula} from './Ejercicio9.js';



// ContarCadena(2.45);
// SepararCadena(123456789,5);
// stringToArray('Hola que tal',' ');
// console.clear();
// Repetir("Hola mundo ",3);

// console.log(invertirCadena("Hola mundo"))
// palabrasRepetidas("hola hola hola perro carro","o");
// console.log(esPalindromo("apps"));
// eliminarCaracteres("1abc, 2abc, Holaabc","abc");
// // TODO: Limpiar la consola
// console.clear();

// console.log(numeroRandom(501,600));
// console.log(Capicua(1514));
// console.log(Factorial(5));
// // TODO: Limpiar la consola
// console.clear();

// console.log(esPrimo(7));
// console.log(esPar(4));
// console.log(convertirTemperatura(41,"f"));
// // TODO: Limpiar la consola
// console.clear();

// console.log(calcularDescuento(1000,200));
// console.log(Years(2000));
// console.clear();

// contarConsonantesYVocales("Richard");
// // console.log(`${texto} tiene ${nVocales} vocales`);
// validarTexto("Richard Guach");
// validarCorreo("guachrichard24@institutotraversari.edu.ec");
// //TODO:Limpiar consola
// console.clear();

// const elevarArray = (arreglo = []) => {
//     for (var i in arreglo) {
//         arreglo[i] = Math.pow(arreglo[i],2);
    
//     }
//     console.log(arreglo)
  
// }
// elevarArray([1,2,3,4]);

// maxMinArray([2,45,67,90,-26]);
// objetoDeParesEImpares([2,4,6,10,20,3,5,7,13]);
// ordenarArray([3,4,7,1,3]);
// borrarDuplicados([1,1,2,2,3,3,"r","r","r","pi"]);
// calcularPromedio([9,8,7,6,5,4,3,2,1,0]);

Pelicula.mostrarGenerosAceptados();
const peli = new Pelicula("Ze0123499","50 sombras de grey",
"ASA",2003,["Ecuador","Perú"],["Guerra"],2.5);

peli.getFichaTecnica();

const scaryMovie = new Pelicula("fo9837640","Scary movie", "Pepe José",
2003,["Estados Unidos","Venezuela xd"],["Acción"],10);
scaryMovie.getFichaTecnica();


