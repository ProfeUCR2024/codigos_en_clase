/* Se necesita crear un programa en js que dadas tres calificaciones, calcule el promedio y determine la condicion del estudiante*/
// Aprobado si la nota es mayor a 75, Reprobado si la nota es menor a 60 y Aplazado si la nota es mayor a 60 pero menor a 75

let nota1 = 75;
let nota2 = 85;
let nota3 = 55;
let promedio = 0;

promedio = (nota1 + nota2 + nota3) / 3;

/*VERSION 1*/

if(promedio >= 75){
    console.log(`El estudiante aprobo el curso`);
}else{
    if(promedio >= 60 && promedio <  75){
        console.log(`El estudiante esta Aplazado`);
    }else{
        console.log(`El estudiate Reprobo el curso`);
    }
}

/*VERSION 2*/
let mensaje = "La condicion del estudiate es "
let estado = ""

if(promedio >= 75){
    estado = "Aprobado"
}else if(promedio >= 60 && promedio <  75){
    estado = "Aplazado";
}else{
    estado = "Reprobado";
}

console.log(mensaje+estado);

