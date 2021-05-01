//alert('Hola Mundo');

//Comentarios

//Comentario de linea

/*Comentario de mas
 de una linea */



 //Sentencias

 //alert('Hola'); alert('Mundo');

 //alert('Hola');
 //alert('Mundo');

 //alert('Hola')
 //alert('Mundo')

 //alert(3 + 1 + 2);

 //Variables


/*let mensaje;
 mensaje = "Hola Mundo";
 alert(mensaje)*/

 let a = 5;
 let b = 6;
 let suma = a + b;
 console.log("El resultado de la suma es: ",suma);

 let nombre = "Roberto";
 let nombre2 = nombre;

 nombre2 = "Carlos";
 console.log("El nombre uno es: ",nombre );
 console.log("El nombre dos es: ",nombre2 );


//Nombrar variables con camel case
nombreUno = "Roberto";
nombreDos = "Carlos";

//Nombrar como underscore
nombre_uno = "Roberto";
nombre_dos = "Carlos";

//Nombres no comunes
let $ = 1;
let _ = 2;

//No puede nombrar variables
/*let 1a = 3;
let primer-nombre = 4;*/

"use strict"
mensaje = "Hola Mundo";

//Constantes

const pi =3.141624;
const COLOR_ROJO = "#FFFFF";
pi_dos = pi;
pi_dos = 7;
console.log(pi);
console.log(pi_dos);

//const id_account = get_id_account(45);

//Tipos de datos

//Dinamicamente tipado

let mensaje_tres = "Hola";
mensaje_tres = 12234

//Tipo de dat Number
let n = 123;
n = 12.456;

//Valores numericos especiales Infinity, -Infinity y NaN

//Infinity: representa el infinito matematico. Es un valor especial que es mayor que cualquier numero.

console.log(1 / 0);
console.log(Infinity)

//NaN representa un error de calculo. Es el resultado de una operacion
//matematica incorrecta o indefinida.

console.log("No es un numero" / 2);

//NaN es pegajoso. Cualquier operacion sobre NaN devuelve NaN

console.log("No es un numero" / 2 + 5);

//Tipo de dato BigInt

//Valores enteros mayores que (2^53-1) o menor que -(2^53) 9.007.199.254.740.991

let numero_grande = 12345678990123445677890123456789999999999999999;
console.log(numero_grande);

//Tipo string
let texto = "hola";
let texto_dos = 'hola';
let texto_tres = ``; //backticks funcionalidad extendidad
let nomb = "Roberto";
console.log("Hola", nomb);
console.log('Hola', nomb);
console.log(`Hola`, nomb);

console.log("Hola ${nomb}");
console.log('Hola ${nomb}');
console.log(`Hola ${nomb}`);

//Tipo Booleano

//true y false

let verdadero = true;
let falso = false;

let mayor = 4 > 1; //True

//Tipo de dato null

//Valor especial que no pertence  ningun tipo de dato anterior.
//Forma un tipo propio separado que contiene solo el valor null.

let edad = null;
console.log(edad);

//En JS null NO significa un objeto no existente
//Es solo un valor especial que representa nada, vacio.

//Valor Undefined
//Valor especial que no pertence a ningun tipo de dato anterior.
//El significado de undefined es valor no asignado.

let edad_dos;
console.log(edad_dos);

//El operador typeof o funcion typeof(x), devuelve el tipo de dato.

console.log(typeof undefined); //undefined
console.log(typeof 0); //number
console.log(typeof true); //boolean
console.log(typeof 10n); //bigint
console.log(typeof "Hola"); //string

console.log(typeof(alert)); //function
console.log(typeof(null)); //object == ERROR DE JAVASCRIPT
console.log(typeof(Math)); //object



































































