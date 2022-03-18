//! 16) Programa una función que devuelva el monto final después de aplicar
//! un descuento a una cantidad dada, pe. miFuncion(1000, 200) devolverá 800.

export const calcularDescuento = (cantidad,descuento) => cantidad-descuento;

//! 17) Programa una función que dada una fecha válida determine cuantos años
//! han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
//! devolverá 35 años (en 2020).

export const Years = (año) =>{
    let fechaActual = new Date();
    fechaActual = fechaActual.getFullYear();
    
    return fechaActual - año;
}