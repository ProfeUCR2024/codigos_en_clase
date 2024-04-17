let nota1 = Number(prompt("Ingrese la nota 1: ")); 
let nota2 = parseFloat(prompt("Ingrese la nota 2: ")); 
let nota3 = parseFloat(prompt("Ingrese la nota 3: "));/*Si es un numero lo convierte, caso contratorio devuelve un NaN*/

sumaNotas = (nota1 + nota2 + nota3)
promedio =  sumaNotas/ 3; 


let mensaje = "La condicion del estudiate es "
let estado = ""

let divMensaje = document.getElementById("mensaje");

if(promedio >= 75){
    estado = "Aprobado"
}else if(promedio >= 60 && promedio <  75){
    estado = "Aplazado";
}else{
    estado = "Reprobado";
}
console.log(`la suma de las notas es ${sumaNotas}`);
console.log(`promedio calculado ${promedio}`);

let respuesta = mensaje+estado;
divMensaje.innerHTML = respuesta;


alert(mensaje+estado)