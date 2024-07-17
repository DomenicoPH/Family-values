const imagenes = document.querySelectorAll('.galeriaPage__imagen');
const fullscreen = document.getElementById('fullscreen');

imagenes.forEach(img => {
    img.addEventListener('click', abrirImagen);
})

function abrirImagen(e){
    const url = e.target.src

    let screen = document.querySelector('.fullscreen__absoluto');
    if(!screen) {
        screen = document.createElement('div');
        screen.classList.add('fullscreen__absoluto');
        fullscreen.appendChild(screen);
    }

    const img = document.createElement('img');
    img.classList.add('fullscreen__imagen');
    img.src = url;

    // Limpiar 'screen' y mostrar nueva imagen
    screen.innerHTML = '';
    screen.appendChild(img);

    // Cerrar la imagen al hacer click fuera
    screen.addEventListener('click', () => {
        fullscreen.removeChild(screen);
    })
}