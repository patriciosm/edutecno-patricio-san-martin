var radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí
// 1.- Agregar horas a Traumatología
traumatologia.push(
    {hora:'09:00', especialista:'RENÉ POBLETE', paciente:'ANA GELLONA', rut:'13123329-7', prevision:'ISAPRE'},
    {hora:'09:30', especialista:'MARIA SOLAR', paciente:'RAMIRO ANDRADE', rut:'12221451-K', prevision:'FONASA'},
    {hora:'10:00', especialista:'RAUL LOYOLA', paciente:'CARMEN ISLA', rut:'10112348-3', prevision:'ISAPRE'},
    {hora:'10:30', especialista:'ANTONIO LARENAS', paciente:'PABLO LOAYSA', rut:'13453234-1', prevision:'ISAPRE'},
    {hora:'12:00', especialista:'MATIAS ARAVENA', paciente:'SUSANA POBLETE', rut:'14345656-6', prevision:'FONASA'}
);

// 2.- Eliminar primer y último elemento de Radiología
radiologia.pop();
radiologia.shift();


// 3.- imprimir consultas médicas de dental
let textoDental = "";
dental.forEach(function(d){
    textoDental += `<p>${d.hora} - ${d.especialista} - ${d.paciente} - ${d.rut} - ${d.prevision}</p>`;
});
document.getElementById("consultas-dentales").innerHTML = textoDental;


// 4.- Imprimir el listado total de pacientes
let textoPacientes = "";
let consultas = radiologia.concat(traumatologia,dental);
consultas.forEach(function(consulta){
    textoPacientes += `<li>${consulta.paciente}</li>`;
});
document.getElementById("listado-pacientes").innerHTML = textoPacientes;


// 5.- Filtrar pacientes con Isapre en Dental
let textoIsapre = "";
let isapreDental = dental.filter(function(d) {
    return d.prevision === "ISAPRE";
});
isapreDental.forEach(function(i) {
    textoIsapre += `<li>${i.paciente} - ${i.prevision}</li>`;
});
document.getElementById("pacientes-isapre").innerHTML = textoIsapre;


// 6.- Filtrar pacientes de Fonasa en Traumatología
let textoFonasa = "";
traumatologia.forEach(function(t) {
    if(t.prevision === "FONASA") {
        textoFonasa += `<li>${t.paciente} - ${t.prevision}</li>`;
    }
});
document.getElementById("pacientes-fonasa").innerHTML = textoFonasa;


//Agregar código para el desafio 2 aquí
let textoResumenes = "";

textoResumenes += `<p>Cantidad de atenciones para <span class="negrita">Radiología: ${radiologia.length}</span></p>`;
textoResumenes += `<p><span class="negrita">Primera atención:</span> ${radiologia[0].paciente} - ${radiologia[0].prevision} <span class="negrita">| Última atención:</span> ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`;

textoResumenes += `<p>Cantidad de atenciones para <span class="negrita">Traumatología: ${traumatologia.length}</span></p>`;
textoResumenes += `<p><span class="negrita">Primera atención:</span> ${traumatologia[0].paciente} - ${traumatologia[0].prevision} <span class="negrita">| Última atención:</span> ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`;

textoResumenes += `<p>Cantidad de atenciones para <span class="negrita">Dental: ${dental.length}</span></p>`;
textoResumenes += `<p><span class="negrita">Primera atención:</span> ${dental[0].paciente} - ${dental[0].prevision} <span class="negrita">| Última atención:</span> ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`;

document.querySelector("#resumenes").innerHTML = textoResumenes;