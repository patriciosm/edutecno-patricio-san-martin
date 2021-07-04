// Constructor del objeto Consultorio
function Consultorio(nombre, pacientes){
    let _nombre = nombre;
    let _pacientes = pacientes || [];

    Object.defineProperty(this, "_nombre", {
        get: function(){
            return _nombre;
        },
        set: function(nuevoNombre){
            _nombre = nuevoNombre;
        }
    });
    Object.defineProperty(this, "_pacientes", {
        get: function(){
            return _pacientes;
        }
    });
}

// Métodos accesores del objeto Consultorio
Consultorio.prototype.getNombre = function(){
    return this._nombre;
}
Consultorio.prototype.setNombre = function(nombre){
    this._nombre = nombre;
}
Consultorio.prototype.getPacientes = function(){
    return this._pacientes;
}

// Agrega paciente a consultorio
Consultorio.prototype.agregarPaciente = function(paciente){
    this._pacientes.push(paciente); 
}

// Busca paciente por nombre
Consultorio.prototype.findPaciente = function(nombre){
    let encontrado = this._pacientes.find(function(pac){
        return pac.getNombre() === nombre;
    });
    return (encontrado !== undefined) ? encontrado.getDatosPaciente() : "Paciente no registrado en el consultorio";
}

// Método creado solo para ver por consola a modo de aprendizaje
Consultorio.prototype.getTodosLosPacientes = function(){
    this._pacientes.forEach(function(paciente){
        console.log(paciente.getDatosPaciente());
    });
} 

// Constructor del objeto Paciente
function Paciente(nombre, edad, rut, diagnostico){
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    Object.defineProperty(this, "_nombre" , {
        get: function(){
            return _nombre;
        },
        set: function(nuevoNombre){
            _nombre = nuevoNombre;
        }
    });
    Object.defineProperty(this, "_edad" , {
        get: function(){
            return _edad;
        },
        set: function(nuevaEdad){
            _edad = nuevaEdad;
        }
    });
    Object.defineProperty(this, "_rut" , {
        get: function(){
            return _rut;
        },
        set: function(nuevoRut){
            _rut = nuevoRut;
        }
    });
    Object.defineProperty(this, "_diagnostico" , {
        get: function(){
            return _diagnostico;
        },
        set: function(nuevoDiagnostico){
            _diagnostico = nuevoDiagnostico;
        }
    });
}

// Métodos accesores del objeto Paciente
Paciente.prototype.getNombre = function(){
    return this._nombre;
}
Paciente.prototype.setNombre = function(nombre){
    this._nombre = nombre;
}
Paciente.prototype.getEdad = function(){
    return this._edad;
}
Paciente.prototype.setEdad = function(edad){
    this._edad = edad;
}
Paciente.prototype.getRut = function(){
    return this._rut;
}
Paciente.prototype.setRut = function(rut){
    this._rut = rut;
}
Paciente.prototype.getDiagnostico = function(){
    return this._diagnostico;
}
Paciente.prototype.setDiagnostico = function(diagnostico){
    this._diagnostico = diagnostico;
}

// Obtiene todos los datos del paciente
Paciente.prototype.getDatosPaciente = function(){
    return `Nombre: ${this._nombre} | Edad: ${this._edad} | Rut: ${this._rut} | Diagnostico: ${this._diagnostico}`;
}

// Se instancian los objetos con datos
let paciente1 = new Paciente("Francisca Rojas","55","9878782-1","Migraña");
let paciente2 = new Paciente("Pamela Estrada","36","15345241-3","Tunel carpiano");
let consultorio1 = new Consultorio("Cenmemai",[paciente1,paciente2]);
let paciente3 = new Paciente("Armando Luna","34","16445345-9","Discopatia");
let paciente4 = new Paciente("Diego Marre","32","16554741-K","Cardiopatia");

// Se agregar nuevos pacientes a consultorio
consultorio1.agregarPaciente(paciente3);
consultorio1.agregarPaciente(paciente4);

// Se llama a método solo creado para ver por consola a todos las pacientes a forma de aprendizaje
consultorio1.getTodosLosPacientes();

// Imprime tabla con todos los pacientes en el documento
let tabla = "<table><thead><tr><th>Nombre</th><th>Edad</th><th>RUT</th><th>Diagnóstico</th></tr></thead><tbody>";
consultorio1.getPacientes().forEach(function(pac){
    tabla += `<tr><td>${pac.getNombre()}</td><td>${pac.getEdad()}</td><td>${pac.getRut()}</td><td>${pac.getDiagnostico()}</td></tr>`;
});
tabla += "</tbody></table>"
document.getElementById("listado-pacientes").innerHTML = tabla;

// Buscador de pacientes
const buscador = () => {
    let botonBuscar = document.getElementById("btn-buscar");
    let cajaRespuesta = document.getElementById("caja-respuesta");
    botonBuscar.addEventListener("click", function(){
        cajaRespuesta.innerHTML = "";
        let buscaPaciente = document.getElementById("busca-paciente").value;
        cajaRespuesta.innerHTML = consultorio1.findPaciente(buscaPaciente);
    });
}
buscador();