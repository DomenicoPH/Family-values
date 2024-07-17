const {abrirImagen} = require('./funciones')

const imagenes = document.querySelectorAll('.galeriaPage__imagen');
const fullscreen = document.getElementById('fullscreen');

imagenes.forEach(img => {
    img.addEventListener('click', abrirImagen);
});