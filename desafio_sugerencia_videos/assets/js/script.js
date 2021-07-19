class Multimedia{
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
    }
    get url(){
        return this.getUrl();
    }
    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        let _id = id;
        this.getId = () => _id;
    }
    playMultimedia(){
        play.mostrarVideo(this.url, this.getId());
    }
    setInicio(tiempo){
        let nuevaUrl = `${this.url}?start=${tiempo}`;
        play.mostrarVideo(nuevaUrl, this.getId());
    }
}

// Declaración función autoejecutable IIFE
const play = (() => {
    let elemento;
    agregaUrlVideo = (urlVideo, idFrame) => {
        elemento = document.getElementById(idFrame);
        elemento.setAttribute('src', urlVideo);
    }

    return {
        mostrarVideo: (url, id) => {
            agregaUrlVideo(url, id);
        }
    }
})();

//Instancias
let musica = new Reproductor('https://www.youtube.com/embed/SQNtGoM3FVU','musica');
let pelicula = new Reproductor('https://www.youtube.com/embed/yn7U1KIGeuQ','peliculas');
let serie = new Reproductor('https://www.youtube.com/embed/tAyy_UL6uqc','series');

// Se agregan url a cada frame
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Se cambia el tiempo de inicio del video
musica.setInicio(55);