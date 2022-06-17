/* TIPOS DE DADOS */

// Boolean
// Null
// Undefined
// Number
// String

//var b = "1";

/*console.log(b);

console.log("1" + "1");
console.log(1 + 1);
*/


var a = false;

console.log(a);

/* OPERAÇÕES ARITMÉTICAS */


// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % Módulo
// ++ Incremento
// -- Decremento

var a = 30;
var b = 30;

var c = a + b;

console.log(c);

/* ATRIBUIÇÕES */

// =  x = y  x = y
// += x += y x = x + y
// -= x -= y x = x - y
// *= x *= y x = x * y
// /= x /= y x = x / y
// %= x %= y x = x % y

var a = 30;

a %= 28;


console.log(a);

/* OPERADORES COMPARATIVOS */

// == igual a
// === valor igual e igual
// ! = não é igual
// !== não igual ou não igual
// > maior que
// < menor que
// > = maior que ou igual a 
// <=  menor ou igual a 

var a = 5;
var b = 4;


console.log( a <= b )

/* OPERADORES LÓGICOS */

// && e
// || ou
// Negativo

var idade = 9;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidade = menor10 || maior65;

console.log("idade", idade);

console.log("maior que 65", maior65);

console.log("menor que 10", menor10);

console.log("tem direito a gratuidade", gratuidade);

/* STRINGS */

var numero = "88" - 5
var str = "valor qualquer" * 2;

console.log(numero);
