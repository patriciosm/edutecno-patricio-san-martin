// Declaración del Objeto
let especialidades = {
    Radiología: [{
        hora: '11:00',
        especialista: 'Ignacio Schulz',
        paciente: 'Francisca Rojas',
        rut: '9878782-1',
        prevision: 'Fonasa'
        },
        {
        hora: '11:30',
        especialista: 'Federico Subercaseaux',
        paciente: 'Pamela Estrada',
        rut: '15345241-3',
        prevision: 'Isapre'
        },
        {
        hora: '15:00',
        especialista: 'Fernando Wurthz',
        paciente: 'Armando Luna',
        rut: '16445345-9',
        prevision: 'Isapre'
        },
        {
        hora: '15:30',
        especialista: 'Ana María Godoy',
        paciente: 'Manuel Godoy',
        rut: '17666419-0',
        prevision: 'Fonasa'
        },
        {
        hora: '16:00',
        especialista: 'Patricia Suazo',
        paciente: 'Ramón Ulloa',
        rut: '14989389-K',
        prevision: 'Fonasa'
    }],
    Traumatología: [{
        hora: '8:00',
        especialista: 'María Paz Altuzarra',
        paciente: 'Paula Sanchez',
        rut: '15554774-5',
        prevision: 'Fonasa'
        },
        {
        hora: '10:00',
        especialista: 'Raúl Araya',
        paciente: 'Angélica Navas',
        rut: '15444147-9',
        prevision: 'Isapre'
        },
        {
        hora: '10:30',
        especialista: 'María Arriagada',
        paciente: 'Ana Klapp',
        rut: '17879423-9',
        prevision: 'Isapre'
        },
        {
        hora: '11:00',
        especialista: 'Alejandro Badilla',
        paciente: 'Felipe Mardones',
        rut: '1547423-6',
        prevision: 'Isapre'
        },
        {
        hora: '11:30',
        especialista: 'Cecilia Budnik',
        paciente: 'Diego Marre',
        rut: '16554741-K',
        prevision: 'Fonasa'
        },
        {
        hora: '12:00',
        especialista: 'Arturo Cavagnaro',
        paciente: 'Cecilia Mendez',
        rut: '9747535-8',
        prevision: 'Isapre'
        },
        {
        hora: '12:30',
        especialista: 'Andrés Kanacri',
        paciente: 'Marcial Suazo',
        rut: '11254785-5',
        prevision: 'Isapre'
    }],
    Dental: [{
        hora: '8:30',
        especialista: 'Andrea Zuñiga',
        paciente: 'Marcela Retamal',
        rut: '11123425-6',
        prevision: 'Isapre'
        },
        {
        hora: '11:00',
        especialista: 'María Pía Zañartu',
        paciente: 'Angel Muñoz',
        rut: '9878789-2',
        prevision: 'Isapre'
        },
        {
        hora: '11:30',
        especialista: 'Scarlett Witting',
        paciente: 'Mario Kast',
        rut: '7998789-5',
        prevision: 'Fonasa'
        },
        {
        hora: '13:00',
        especialista: 'Francisco Von Teuber',
        paciente: 'Karin Fernández',
        rut: '18887662-K',
        prevision: 'Fonasa'
        },
        {
        hora: '13:30',
        especialista: 'Eduardo Viñuela',
        paciente: 'Hugo Sanchez',
        rut: '17665461-4',
        prevision: 'Fonasa'
        },
        {
        hora: '14:00',
        especialista: 'Raquel Villaseca',
        paciente: 'Ana Sepúlveda',
        rut: '14441281-0',
        prevision: 'Isapre'
    }]
};

// Muestra subtitulo, datos en la tabla, y párrafo de acuerdo a opción seleccionada
const mostrarDatos = (especialidad) => {
    let tablaDatos = document.getElementById("tabla-datos");
    let atenciones = document.getElementById("atenciones");
    let subtitulo = document.getElementById("subtitulo");
    tablaDatos.innerHTML = "";
    atenciones.innerHTML = "";
    subtitulo.innerHTML = "";
    let tabla = "";
    let longitud = especialidades[especialidad].length;
    for(let i = 0; i < longitud; i++) {
        tabla += `<tr>
            <td>${especialidades[especialidad][i].hora}</td>
            <td>${especialidades[especialidad][i].especialista}</td>
            <td>${especialidades[especialidad][i].paciente}</td>
            <td>${especialidades[especialidad][i].rut}</td>
            <td>${especialidades[especialidad][i].prevision}</td>
            </tr>`;
    }
    subtitulo.innerHTML = `Listado de atenciones de ${especialidad}`;
    tablaDatos.innerHTML = tabla;
    atenciones.innerHTML = `<span class="negrita">Primera atención:</span> ${especialidades[especialidad][0].paciente} - ${especialidades[especialidad][0].prevision} | <span class="negrita">Última atención:</span> ${especialidades[especialidad][longitud - 1].paciente} - ${especialidades[especialidad][longitud - 1].prevision}`;
}

const manejaOpciones = () => {
    let select_especialidad = document.getElementById("select_especialidad");

    // Se crean y agregan opciones al select
    let options = "<option value=''>Especialidad</option>";
    for(propiedad in especialidades) {
        options += `<option value='${propiedad}'>${propiedad}</option>`;
    }
    select_especialidad.innerHTML = options;
    
    // Se monitorea el select
    select_especialidad.addEventListener('change', function(){
        if(this.value !== "") {
            mostrarDatos(this.value);
        }
    });
}

manejaOpciones();