class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this.getNombre = () => _nombre;
        this.getEdad = () => _edad;
        this.getImg = () => _img;
        this.getSonido = () => _sonido; 
        this.getComentarios = () => _comentarios;
        this.setComentarios = (comentarios) => _comentarios = comentarios;
    }

    get nombre(){
        return this.getNombre();
    }

    get edad(){
        return this.getEdad();
    }

    get img(){
        return this.getImg();
    }

    get sonido(){
        return this.getSonido();
    }

    get comentarios(){
        return this.getComentarios();
    }

    set comentarios(nuevosComentarios){
        this.setComentarios(nuevosComentarios);
    }
}

export default Animal;