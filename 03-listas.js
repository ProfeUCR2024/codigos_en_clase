// let lista = [1,2,3,4,5];
// let lista2 = ['carro', true,99,[1,2,3]];


// console.log(lista);
// console.log(lista2);
// console.log(lista[4]);
// console.log(lista2[3]);
// console.log(lista2[3][1]);


// let notasAlumno = [90,85,65];

let listaNombres = [];
console.log(listaNombres);
listaNombres.push('Pedro');
console.log(listaNombres);
listaNombres.push('Pablo');
console.log(listaNombres);
console.log(typeof(listaNombres));

let listaOtrosNombre = ['Luis','Ricardo', 'Diego'] ;

// listaNombres = listaNombres+listaOtrosNombre;
listaNombres.push(...listaOtrosNombre); // ... se llama un operador de propagacion
console.log(listaNombres);
console.log(typeof(listaNombres));


let masNombres = ['Tiziana','Anyel','Jose Mario','Isabel'];

// listaNombres.push(masNombres[0]);
// listaNombres.push(masNombres[1]);
// listaNombres.push(masNombres[2]);
listaNombres.push(...masNombres);

console.log(listaNombres);

//BORRAR DATOS DE UNA LISTA
//1. pop() elimina el ultimo elemento de una lista

listaNombres.pop();
console.log(listaNombres);

//2. shift() elimina el primer elemento de una lista

listaNombres.shift();
console.log(listaNombres);

//3. delete este opardor elimina un elemento de la lista, pero deja ese espacio vacio. Se le puede indicar la posicion del arreglo que se desea eleminar

delete listaNombres[3];
console.log(listaNombres);


//4. splice() Este metodo permite eliminar elementos en cualquier posicion de la lista, indicando el indice de inicio y la cantidad de elementos a eliminar

listaNombres.splice(1,1);
console.log(listaNombres);