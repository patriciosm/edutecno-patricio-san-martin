import Animales from './consulta.js';

document.getElementById('animal').addEventListener('change', async (e) =>{
    const { animales } = await Animales.getData();
    const animalSeleccionado = e.target.value;
    const animalEncontrado = animales.find(a => a.name === animalSeleccionado);
    const preview = document.getElementById('preview');
    preview.style.backgroundImage = `url('./assets/imgs/${animalEncontrado.imagen}')`;
});