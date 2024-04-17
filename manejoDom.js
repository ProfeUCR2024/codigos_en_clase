let titulo = document.getElementById('titulo');

let botonCambiar = document.getElementById('botonCambiar');

let parrafo = document.getElementById('parrafo');

botonCambiar.addEventListener('click',function(){
    titulo.textContent = 'Me cambiaron a traves del DOM';
    titulo.style.color = 'darkblue';
    parrafo.textContent = 'Parrafo cambiado';
    parrafo.style.fontSize = '32px';
    parrafo.style.color = 'white';
    parrafo.style.backgroundColor = 'blue';
});

document.getElementById('miBoton').addEventListener('click',function(event){
    alert('Dije que no me presionara !!!!!')
})