function sumaNumeros(n){
    acumulador = 0 ;
    for(i=1;i<=n;i++){
        acumulador = acumulador+i;
        //console.log(i)
        
    }
    console.log(acumulador);
}

function recibeDatosNumericos(){
    parametro = Number(prompt());
    return parametro;
}


function nombre(){
    nombrePaciente = prompt(' Por favor ingrese su nombre: ');
    return nombrePaciente;
}


function imc(){
    peso = Number(prompt(`Ingrese su peso en kilogramos: `));
    altura = Number(prompt(`Ingrese su altura en metros: `));

    imc = peso / (altura**2);

    return imc;
}

function condicionImc(imc){
    condicion = '';
    if(imc < 18.5){
        condicion = 'Bajo Peso';
    }else if (imc >= 18.5 && imc <= 24.9){
        condicion = ' Saludable';
    }else if (imc >=25 && imc < 30){
        condicion = 'Sobrepeso';
    }else if (imc <=30 && imc < 40){
        condicion = 'Obesidad';
    }else{
        condicion = ' Obesidad Severa';
    }
    return condicion;
}

function main(){
    nombreCliente = nombre();
    imcCliente = imc();
    condCliente = condicionImc(imcCliente);
    alert(`Hola ${nombreCliente}, su IMC es de ${imcCliente} y su condicion es ${condCliente}`);
}

main();
















