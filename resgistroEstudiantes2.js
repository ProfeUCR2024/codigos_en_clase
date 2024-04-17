function nombreEstudiante(){
    nombre = prompt("Ingrese el nombre del estudiante: ");
    return nombre;
}

function ctnNotas(){
    ctn = Number(prompt('Ingrese la cantidad de notas del estudiante: '));
    return ctn;
}

function notas(){
    notas = [];
    cantidadDeNotas = ctnNotas();
    for(i=1;i<=cantidadDeNotas;i++){
        tmpNota = Number(prompt(`Ingrese la nota #${i}: `));
        notas.push(tmpNota);
    }
    return notas;
}

function promedio(arregloNotas){
    sumaNotas = 0;
    for(i=0;i<arregloNotas.length;i++){
        sumaNotas = sumaNotas + arregloNotas[i];
    }
    promedio = sumaNotas / arregloNotas.length ;
    promedio_redondeado = promedio.toFixed(2);
    //console.log(typeof(promedio_redondeado));
    promedio_redondeado = Number(promedio_redondeado);
    //console.log(typeof(promedio_redondeado));
    return promedio_redondeado;
}
// crear funcion para determinar la condicion del alumno y modificar la funcion main() para que lo indique

function condicion(promedioNotas){
    estado = ''
    if(promedioNotas<60){
        estado = 'REPROBADO';
    }else if (promedioNotas<75 && promedioNotas>=60){
        estado = 'APLAZADO';
    }else{
        estado = 'APROBADO';
    }
    return estado;
}


function main(){
    nombre = nombreEstudiante();

    //let nombre = prompt("Ingrese el nombre del estudiante: ");

    listaNotas = notas();
    
    promedioNotas = promedio(listaNotas);
    estadoAlumno = condicion(promedioNotas);
    alert(`El estudiante ${nombre}, obtuvo un promedio de ${promedio_redondeado} y su condicion es de ${estadoAlumno}`);

}

function powerMain(){
    otroNombre = nombreEstudiante();
}


main();


