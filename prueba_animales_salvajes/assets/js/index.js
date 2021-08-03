import { Leon, Lobo, Oso, Serpiente, Aguila} from './clases/Nombres.js';

let animales = [];

document.getElementById('btnRegistrar').addEventListener('click', () => {
    // Extracción de datos del formulario
    let animal = document.getElementById('animal');
    let edad = document.getElementById('edad');
    let comentarios = document.getElementById('comentarios');
    let previewElement = document.getElementById('preview');
    let imgSrcBg = previewElement.style.backgroundImage;
    let imgSrc = imgSrcBg.slice(5, imgSrcBg.length - 2);
    let sonido = document.getElementById('sonido');

    let nuevoAnimal;

    if( animal.value && edad.value && comentarios.value && imgSrc && sonido.value) {
        switch(animal.value){
            case 'Leon': nuevoAnimal = new Leon(animal.value, edad.value, imgSrc ,comentarios.value, sonido.value);
                        break;
            case 'Lobo': nuevoAnimal = new Lobo(animal.value, edad.value, imgSrc ,comentarios.value, sonido.value);
                        break;
            case 'Oso': nuevoAnimal = new Oso(animal.value, edad.value, imgSrc ,comentarios.value, sonido.value);
                        break;
            case 'Serpiente': nuevoAnimal = new Serpiente(animal.value, edad.value, imgSrc ,comentarios.value, sonido.value);
                        break;
            case 'Aguila': nuevoAnimal = new Aguila(animal.value, edad.value, imgSrc ,comentarios.value, sonido.value);
                        break;
            default: break; 
        }

        animales.push(nuevoAnimal);
        reloadTable();

        //Limpia los campos
        animal.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentarios.value = '';
        previewElement.style.backgroundImage = 'url("./assets/imgs/lion.svg")';
        sonido.value = '';
    }
    else {
        alert('Faltan datos para registrar el animal');
    }
});

const reloadTable = () => {
    const tablaAnimales = document.getElementById('Animales');
    tablaAnimales.classList.add('row');
    tablaAnimales.innerHTML = '';
    animales.forEach((a, i) => {
        tablaAnimales.innerHTML += `<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                                        <div class="mb-3">
                                            <img src="${a.img}" class="img-fluid animal-thumbnail" alt="${a.nombre}" onclick="mostrarFicha(${i})">
                                            <button class="btn-play" onclick='playSonido(${i})' type="button"><img src="./assets/imgs/audio.svg"></button>
                                        </div>
                                    </div>`;
    });
}

window.playSonido = (i) => {
    const animal = animales[i];
    const audio = document.getElementById('player');
    audio.setAttribute('src', animal.sonido);
    
    switch(animal.nombre){
        case 'Leon': animal.rugir(audio);
                    break;
        case 'Lobo': animal.aullar(audio);
                    break;
        case 'Oso': animal.grunir(audio);
                    break;
        case 'Serpiente': animal.sisear(audio);
                    break;
        case 'Aguila': animal.chillar(audio);
                    break;
        default: break;
    }
}

window.mostrarFicha = (i) => {
    const animal = animales[i];
    const ficha = document.querySelector('.modal-body');
    ficha.innerHTML = '';
    ficha.innerHTML = `<div class="text-center text-white">
                            <div class="mb-3"><img class="img-fluid" src="${animal.img}"></div>
                            <div><p>${animal.edad}</p></div>
                            <div><p>${animal.comentarios}</p></div>
                        </div>`;
    $("#exampleModal").modal('toggle');
}