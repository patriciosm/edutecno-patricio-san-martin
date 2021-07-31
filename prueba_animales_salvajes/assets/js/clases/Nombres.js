import Animal from './Animal.js';

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir(audio){
        audio.play();
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar(audio){
        audio.play();
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    grunir(audio){
        audio.play();
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear(audio){
        audio.play();
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar(audio){
        audio.play();
    }
}

export {Leon, Lobo, Oso, Serpiente, Aguila};