// Declaración y asignación de variables
var nombre = prompt("Ingrese nombre");
var apellido = prompt("Ingrese apellido");
var carrera = prompt("Ingrese carrera");
var ramo1 = prompt("Ingrese el primer ramo");
var ramo2 = prompt("Ingrese el segundo ramo");
var ramo3 = prompt("Ingrese el tercer ramo");

var nota1Ramo1 = parseInt(prompt("Ingresa la primera nota para " + ramo1));
var nota2Ramo1 = parseInt(prompt("Ingresa la segunda nota para " + ramo1));
var nota3Ramo1 = parseInt(prompt("Ingresa la tercera nota para " + ramo1));
var nota1Ramo2 = parseInt(prompt("Ingresa la primera nota para " + ramo2));
var nota2Ramo2 = parseInt(prompt("Ingresa la segunda nota para " + ramo2));
var nota3Ramo2 = parseInt(prompt("Ingresa la tercera nota para " + ramo2));
var nota1Ramo3 = parseInt(prompt("Ingresa la primera nota para " + ramo3));
var nota2Ramo3 = parseInt(prompt("Ingresa la segunda nota para " + ramo3));

var promedioRamo1 = ( (nota1Ramo1 + nota2Ramo1 + nota3Ramo1) / 3 ).toFixed(2);
var promedioRamo2 = ( (nota1Ramo2 + nota2Ramo2 + nota3Ramo2) / 3 ).toFixed(2);
var notaAprobacion = parseFloat(prompt("Ingrese la nota de aprobación")).toFixed(2);
var notaRequerida = ( (notaAprobacion * 3) - nota1Ramo3 - nota2Ramo3 ).toFixed();

// Apertura del contenedor
document.write("<div class='container my-3'>");

// Encabezado con datos del alumno y curso
document.write("<h1 class='my-4'>Notas finales</h1>")
document.write("<div class='row'>");
document.write("<div class='col-3 col-sm-2 col-lg-1 font-weight-bold'>Nombre:</div>");
document.write("<div class='col-9 col-sm-8 col-lg-6'>"+ nombre +" "+ apellido +"</div>");
document.write("</div>");
document.write("<div class='row mb-3'>");
document.write("<div class='col-3 col-sm-2 col-lg-1 font-weight-bold'>Carrera:</div>");
document.write("<div class='col-9 col-sm-8 col-lg-6'>"+ carrera +"</div>");
document.write("</div>");

// Construcción de la tabla de notas y promedios
document.write("<table class='table table-hover'>");
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");   
document.write("<tbody>");
document.write("<tr>");
document.write("<td>"+ ramo1 +"</td>");
document.write("<td>"+ nota1Ramo1 +"</td>");
document.write("<td>"+ nota2Ramo1 +"</td>");
document.write("<td>"+ nota3Ramo1 +"</td>");
document.write("<td>"+ promedioRamo1 +"</td>");
document.write("</tr>");     
document.write("<tr>");
document.write("<td>"+ ramo2 +"</td>");
document.write("<td>"+ nota1Ramo2 +"</td>");
document.write("<td>"+ nota2Ramo2 +"</td>");
document.write("<td>"+ nota3Ramo2 +"</td>");
document.write("<td>"+ promedioRamo2 +"</td>");
document.write("</tr>");  
document.write("<tr>");
document.write("<td>"+ ramo3 +"</td>");
document.write("<td>"+ nota1Ramo3 +"</td>");
document.write("<td>"+ nota2Ramo3 +"</td>");
document.write("<td>-</td>");
document.write("<td>-</td>");
document.write("</tr>");
document.write("</tbody>");   
document.write("</table>");

// Texto con nota requerida
document.write("<div class='row'>");
document.write("<div class='col'>");
document.write("<p>Para aprobar el ramo <span class='font-weight-bold'>"+ ramo3 +" con nota "+ notaAprobacion +"</span>, necesitas obtener un <span class='font-weight-bold'>"+ notaRequerida +"</span> en la nota 3.</p>");
document.write("</div>");
document.write("</div>");

// Cierre del contenedor
document.write("</div>");