/*Se necesita calcular el area de un circulo, que se define como pi * r al cuadrado*/


const pi = 3.14;
let r = 35;

let area = pi*(r**2);

console.log(`El area del circulo es ${area}`);
console.log('El area del circulo es ',area);
console.log("El area del circulo es "+ area);

/* Se necesita calcular la raiz cuadrada y la raiz cubica del numero dado por el area */


let rcuadra = area**(1/2);
let rcubica = area**(1/3);

console.log(`La raiz cuadra del area es ${rcuadra} y la raiz cubica es ${rcubica}`);
console.log('La raiz cuadra del area es ',rcuadra, 'y la raiz cubica es ',rcubica);



/* determinar mediante un true o false si un nemero es par*/

let numeroCualquiera = 25;
console.log(numeroCualquiera % 2 == 0)
