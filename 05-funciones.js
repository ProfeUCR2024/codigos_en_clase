//01 Funcion sin parametros
function saludo(){
    console.log('Hola a todos');
}

saludo();

//02 funciones con parametros

function saludoDos(nombre){
    console.log(`Hola ${nombre}, como esta usted?`);
}

saludoDos('Fernando');

//03 funciones sin parametros que retornan un valor

function saludoTres(){
    nombre = 'Fernando';
    saludo = `Hola ${nombre}, como esta usted?`;
    return saludo;
}

//console.log(saludoTres());
variableUno = saludoTres();
console.log(variableUno);


function sumaDosValores(){
    a = 12;
    b = 13;
    c = a+b;
    return c;
}
let respuesta = sumaDosValores();
console.log(respuesta);


//04-funciones con parametros que retornan

function adicionarDosValores(valor1,valor2){
    resultado = valor1 + valor2;
    return resultado
}

respuesta = adicionarDosValores(25,45);
console.log(respuesta);

console.log(adicionarDosValores(15,17));

let sumaValores = 0;

console.log(sumaValores);

//05 funcion sin parametros que NO retorna un valor
function suma(){
    valor1 = 25;
    valor2 = 33;
    sumaValores = valor1+valor2;
}

suma();

console.log(sumaValores);


//06 funcion con parametros que NO retorna un valor
function sumaNumeros(a,b){
    sumaValores = a+b;
}

sumaNumeros(75,33);

console.log(sumaValores);