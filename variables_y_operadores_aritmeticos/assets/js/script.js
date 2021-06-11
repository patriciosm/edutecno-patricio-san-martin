// En el desarrollo se usan diferentes formas de crear funciones sólo por el aprendizaje

let button = document.querySelectorAll("button");
for(let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        switch (this.value) {
            case '2': aritmethics(this.value);
                break;
            case '3': deg(this.value);
                break;
            case '4': daysToYears(this.value);
                break;
            case '5': sumProm(this.value);
                break;
            default: break;
        }
    })
}

// Función para el cálculo aritmético
function aritmethics(id) {
    let num1 = parseInt(prompt("Ingrese el primer número entero mayor que 0"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero mayor que 0"));
    const suma = num1 + num2;
    const resta = num1 - num2;
    const multi = num1 * num2;
    const divi = num1 / num2;
    const modulo = num1 % num2;
    const respuesta = `Respuesta: Dados los números ${num1} y ${num2}, su suma es: ${suma}; su resta es: ${resta}; su multiplicación es: ${multi}; su división es: ${divi}; y su módulo es: ${modulo}.`;
    alert("El resultado fue escrito en la consola y en el documento");
    document.getElementById(id).innerHTML= respuesta;
    console.log(respuesta);
}

let deg = function(id) {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados celsius (C°)"));
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    const respuesta = `Respuesta: ${celsius}C° (celsius) corresponden a ${kelvin}K (kelvin) y a ${fahrenheit}°F (fahrenheit)`;
    alert("El resultado fue escrito en la consola y en el documento");
    document.getElementById(id).innerHTML= respuesta;
    console.log(respuesta);
}

// Función que calcula en base a días ingresados, los años, semanas y días
// Se crea como constante asignando un arrow function 
const daysToYears = (id) => {
    let daysInput = parseInt(prompt("Ingrese la cantidad de días"));
    // Constantes de cálculo
    const daysYear = 365;
    const daysWeek = 7;
    // Cálculos de años, semanas y días
    let years = Math.floor(daysInput / daysYear);
    let remainDays = daysInput - years * daysYear;
    let weeks = Math.floor(remainDays / daysWeek);
    remainDays = remainDays - weeks * daysWeek;
    // Se formatean los textos
    let stringYears = (years == 1) ? `${years} año` : `${years} años`;
    let stringWeeks = (weeks == 1) ? `${weeks} semana` : `${weeks} semanas`;
    let stringDays = (remainDays == 1) ? `${remainDays} día` : `${remainDays} días`;
    const respuesta = `Respuesta: ${daysInput} días corresponden a: ${stringYears} con ${stringWeeks} y ${stringDays}.`;
    alert("El resultado fue escrito en la consola y en el documento");
    document.getElementById(id).innerHTML= respuesta;
    console.log(respuesta);
}

const sumProm = (id) => {
    let num1 = parseInt(prompt("Ingrese el primer número entero"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero"));
    let num4 = parseInt(prompt("Ingrese el cuarto número entero"));
    let num5 = parseInt(prompt("Ingrese el quinto número entero"));
    const suma = num1 + num2 + num3 + num4 + num5;
    const promedio = suma / 5;
    const respuesta = `Respuesta: Dados los números: ${num1} , ${num2} , ${num3} , ${num4} y ${num5}; la suma de ellos es ${suma}; su promedio es ${promedio}`;
    alert("El resultado fue escrito en la consola y en el documento");
    document.getElementById(id).innerHTML= respuesta;
    console.log(respuesta);
}
