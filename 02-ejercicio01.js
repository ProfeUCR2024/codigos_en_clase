/*Hay un tres que se desplaza a una velocidad de 55 km/h. Para llegar a su destino demora 45 minutos. Desarrolle un programa en js que indique en consola la distancia recorrida por el tren en millas*/

let velocidad = 55;
let tiempo = 0.75;
let distanciaKm = velocidad * tiempo

const milla = 1.6;


let distaciaMillas = distanciaKm / milla;

console.log(`Las distancia recorrida por el tren es de : ${distaciaMillas} millas`);