let libro = {
    titulo: "El Hobbit",
    autor: "J.R.R Tolkien",
    publicado: 1937,
    disponibilidad: true
};

console.log(libro.titulo);


//simular que libro fue prestado

const prestarLibro = function(){
    libro.disponibilidad = false;
};
prestarLibro();

if(libro.disponibilidad){
    console.log(`El libro ${libro.titulo} que fue escrito por ${libro.autor} esta disponible !!!`);
}else{
    console.log(`El libro ${libro.titulo} se encuentra en prestamo !!!`);
};


let biblioteca = [
    { titulo: 'El Hobbit', autor:'J.R.R Tolkien', publicado:1937,diponible:true},
    { titulo: '1984', autor:'George Orwell', publicado:1949,diponible:true},
    { titulo: 'La Fundacion', autor:'Isaac Asimov', publicado:1951,diponible:true}
];

//console.log(biblioteca);

for (i=0;i<biblioteca.length;i++){
    console.log(biblioteca[i].titulo);
};

