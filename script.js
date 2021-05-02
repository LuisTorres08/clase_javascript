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

//let verdadero = true;
//let falso = false;

//let mayor = 4 > 1; //True

//Tipo de dato null

//Valor especial que no pertence  ningun tipo de dato anterior.
//Forma un tipo propio separado que contiene solo el valor null.

//let edad = null;
//console.log(edad);

//En JS null NO significa un objeto no existente
//Es solo un valor especial que representa nada, vacio.

//Valor Undefined
//Valor especial que no pertence a ningun tipo de dato anterior.
//El significado de undefined es valor no asignado.

//let edad_dos;
//console.log(edad_dos);

//El operador typeof o funcion typeof(x), devuelve el tipo de dato.

//console.log(typeof undefined); //undefined
//console.log(typeof 0); //number
//console.log(typeof true); //boolean
//console.log(typeof 10n); //bigint
//console.log(typeof "Hola"); //string

console.log(typeof(alert)); //function
console.log(typeof(null)); //object == ERROR DE JAVASCRIPT
console.log(typeof(Math)); //object


//Interacciones: altert, prompt, confirm

//alert (tambien se le conoce como ventana modal, es una ventana modal porque bloquea hasta hasta que le demos aceptar)

//alert("Hola Mundo");

//prompt

//et nombre_capturado = prompt('Digite el nombre', 'Hola');
//alert(nombre_capturado);


//prompt('Digite el nombre');
//prompt('Digite el nombre', ''); //Solo para internet explorer

//Confirm

//let esHelado = confirm('¿Te gusta el helado?');
//console.log(esHelado); //true si presionan OK y false si presionan cancelar

//Coversion de tipos

//Existen dos tipos de conversiones explicita e implicita

//Convertir a String

let valor = true;
console.log(typeof valor);

valor = String(valor); //true
valor = String(false); //false
valor = String(null); //null
console.log(undefined); //undefined
valor = String(valor); 
console.log(typeof valor);

//Convertir a numero

//Conversiones numericas ocurren automaticamnet en funciones matematicas y expresiones

//alert('6' / '2');

let cadena = "123";
let num_cad = Number(cadena);
console.log(Number('hola')); //NaN

/*
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

//Convertir a Booleano

console.log(Boolean("Hola"))

/*
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true 
'  ' -> true
*/

console.log(Boolean(String(0)))
console.log(Boolean(0))

//Operadores basicos

//Operadores unarios y binarios

let res;
a = 5;
b = 2;

res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b; //mod
res = a ** b;//potencia


//alert('1' + 2);//12
//alert(1 + '2');//12

//alert(2 + 2 + '1');//41
//alert('1' + 2 + 2);//122

//alert(2 - '1');//1
//alert('6' / '2');//3
//alert('6' / '2a');//

//Operacion unaria +

a = 1;
console.log(+a);

a = -1;
console.log(+a);

console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log(+null);
console.log(+"");

a = "2";
b = "3";

console.log(+a + +b);
console.log(Number(a) + Number(b));

//Operaciones unarias

a = 1;
console.log(-a);

a = -1;
console.log(-a);

console.log(-a);

console.log(-true);
console.log(-false);

//Asignaciones

a = 2 + 3;
a = b = c = 2 + 3;

c = 2 + 3;
b = c;
a = b;

c = 3 -(a = b + 1);

//Modificaciones

a = a + 2;
a += 2;
a = a - 2;
a -= 2;

//Incremento y Decremento

//++ Incremento
//-- Decremento

a = 2;
a++;
console.log(a); //3

a = 2;
a--;
console.log(a); //1

//Posicion de incremento o decremento

a = 1;
b = ++ a;
console.log(b);//2

a = 1;
b = a ++;
c = a;
console.log(b);//1
console.log(c);//2

//Comparaciones

console.log(2 > 1); //true
console.log(2 == 1); //false
console.log(2 != 1); //true

let resultado = 2 > 1;

//Comparaciones entre cadenas

console.log('Z' > 'A'); //true
console.log('Show' > 'show'); //false
console.log('casa' > 'casas'); //false
console.log('a' > 'A'); //true
console.log('carro' > 'cerro'); //false



// 1. La letra miniscula es mayor que la mayuscula
// 2. La palabra con mas letras despues de pasar la primera condicion es mayor que la de menos letras


//Comparacion de diferente tipos

//a = 0;
//b = '0';

//boleano_a = Boolean(a); //false
//boleano_b = Boolean(b); //true

//console.log(a == b); //true

//Al comparar valores de diferentes tipos, JS convierte los valores a Numeros.
//Toda comparacion con NaN es falsa.
//El undefined y el null en las comparaciones de igualacion no estrictas
// actuan diferente: son iguales entre si, pero no a ningun otro valor.

console.log('************');
console.log('2' > 1); //true
console.log('01' == 1); //true
console.log(true > 0); //true
console.log(false == 0); //true

console.log('***** NaN*******');
//NaN
console.log('hola' > 0); //false
console.log('hola' == 0); //false
console.log('hola' == 0); //false

console.log('*****Undefined******');
//undefined
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false

console.log('*****Null******');
//null
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null == 0); //false
console.log(null >= 0); //false


console.log('****Null y Undefined ==********');

//El undefined y el null en las comparaciones de igualacion no estrictas
// actuan diferente: son iguales entre si, pero no a ningun otro valor.

console.log(null == undefined); //true
console.log(null == 5); //false
console.log(undefined == 5); //false

console.log('****No diferencia de 0 de falso ==********');

console.log(0 == false); //true
console.log('' == false); //true

//Igualacion estricta
console.log('****Igualacion estricta********');

console.log(0 === false); //false
console.log(null === undefined); //false
console.log(null == undefined); //true
console.log(nombre === undefined); //false

//Sentencia IF

/*
if (condicion){

}else{

}
*/

//if de linea
if(4 > 5) console.log('Mensaje');

if(4 > 5){
   b = 5 + 3;
   console.log('Mensaje');
}

if('0'){
   console.log('entro');
}

let edadx;

if(edadx){
    console.log('Variable definida');
}else{
    console.log('Variable indefinida');
}

//Haga un algoritmo que dado una edad retorne true si es mayor de edad, false si no lo es

let edad_usuario = 17;

if (edad_usuario >= 18) {
    console.log(true);
} else {
    console.log(false);
}

console.log(edad_usuario >= 18);

//Operador ternario

//Condicion ? operacion verdadera : operacion falsa
resultado = edad_usuario >= 18 ? x = 5: x = 7;

//Operadores logico

//OR

/*
v or v = v
v or f = v
f or v = v
f or f = f
 */

console.log('*****Operador OR *****');

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

if(4 == 4 || 2 > 5){
    console.log('Verdadero');
}

//resulatdo = valor_uno || valor_dos || valor_tres
// 1. Evalua los operandos de izquierda a derecha
// 2. Por cada operando, convierte el valor a booleano. Si el resultado es true,
//se detiene y retorna el valor original de ese operando.
// 3. Si todos los operandos han sido evaluados (todos eran falsos) retorna el ultimo operando.

let  comparacion_booleana = true || false || true; //true
comparacion_booleana = '0' || '0'; //'0'
comparacion_booleana = undefined || null || NaN || ''; // '
comparacion_booleana = undefined || null || 3 || ''; //3
comparacion_booleana = undefined || 'hola' || 3 || ''; //'hola'

//Resumen: Devuelve el primer valor verdadero o el ultimo si todos son falsos.


//Operador AND

console.log('*****Operador AND *****');

console.log(true && true); //true
console.log(true && false); //true
console.log(false && true); //true
console.log(false && false); //false

if(4 == 4 && 2 > 5){
    console.log('Verdadero');
}

//resulatdo = valor_uno || valor_dos || valor_tres
// 1. Evalua los operandos de izquierda a derecha
// 2. Por cada operando, convierte el valor a booleano. Si el resultado es false,
//se detiene y retorna el valor original de ese operando.
// 3. Si todos los operandos han sido evaluados (todos eran verdaderos) retorna el ultimo operando.

let  comparacion_booleana2 = true && false && true; //false
comparacion_booleana2 = '0' && '0'; //'0'
comparacion_booleana2 = undefined && null && NaN && ''; //undefined
comparacion_booleana2 = undefined && null && 3 && ''; //undefined
comparacion_booleana2 = undefined && 'hola' && 3 && ''; //undefined

//Resumen: Devuelve el primer valor falso o el ultimo si todos son verdaderos.

//Prevalencia U Orden entre OR y AND

// a && b || c && d == (a && b) || (c && d)

//Negacion

console.log(!true); //false
console.log(!false); //true
console.log(!!undefined); //false == Boolean(undefined)


//Nullish o Fusion de nulos

//resultado = valor_uno ?? valor_dos ?? valor_tres;
// 1. Evalua los operandos de izquierda a derecha
// 2. Por cada operando revisa si es null o undefined y regresa el primero que no sea
// ni nulo ni undefined.
// 3. Si todos los operandos han sido evaluados son nulos o undefined regresa el ultimo.

a = null ?? undefined ?? undefined ?? null ?? 'hola' ?? null ?? 'carlos'; //'hola'

a = null ?? undefined ?? undefined ?? undefined ?? null ?? null ?? null; //null














































































































