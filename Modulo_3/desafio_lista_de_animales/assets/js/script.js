class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario(){
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion} y el número de contacto: ${this._telefono}`;
    }
}

class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo(){
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota(){
        return this._nombreMascota;
    }
    set nombreMascota(nuevoNombreMascota){
        this._nombreMascota = nuevoNombreMascota;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(nuevaEnfermedad){
        this._enfermedad = nuevaEnfermedad;
    }
}

btnAgregar = document.querySelector('button');
btnAgregar.addEventListener('click', (event) => {
    event.preventDefault();
    let propietario = document.querySelector('#propietario').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;
    let nombreMascota = document.querySelector('#nombreMascota').value;
    let tipo = document.querySelector('#tipo').value;
    let enfermedad = document.querySelector('#enfermedad').value;

    let resultado = document.querySelector('#resultado');
    const mostrarLista = (tipoMascota) => {
        resultado.innerHTML = `<li>${tipoMascota.datosPropietario()}</li><li>${tipoMascota.tipo}, mientras que el nombre de la mascota es ${tipoMascota.nombreMascota} y la enfermedad es: ${tipoMascota.enfermedad}</li>`;
    }

    switch(tipo){
        case 'perro': let Perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad); 
                    mostrarLista(Perro);
                    break;
        case 'gato': let Gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
                    mostrarLista(Gato);
                    break;
        case 'conejo': let Conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);            
                    mostrarLista(Conejo);
                    break;
        default: break;
    }

});