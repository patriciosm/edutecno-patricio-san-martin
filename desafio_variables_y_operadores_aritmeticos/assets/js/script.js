// En el desarrollo se usan diferentes formas de crear funciones sólo por el aprendizaje

// Capturador del evento click de los botones
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

// Verifica que lo ingresado sea un número positivo
let verifyNumber = function(texto , positivo) {
    let test = false;
    let num = 0;
    while(test == false) {
        num = parseInt(prompt(texto));
        // Se comprueba que sea un número y no sea nulo o vacío
        if (Number.isInteger(num) && num != null) {
            // Si indicó la variable positivo como true se valida que el número sea positivo
            if(positivo == true) {
                if(num > 0) {
                    test = true;
                }
                else {
                    alert("Ingrese un número positivo");
                }
            }
            else {
                test = true;
            }
        }
        else {
            alert("Ingrese un número válido");
        }
    }
    return num;
}

// Función para el cálculo aritmético. Se declara de forma tradicional
function aritmethics(id) {
    // Asignación de variables
    let num1 = verifyNumber("Ingrese el primer número entero mayor que 0", true);
    let num2 = verifyNumber("Ingrese el segundo número entero mayor que 0", true);
    // Se realizan las operaciones aritméticas y se asignan a constantes.
    const suma = num1 + num2;
    const resta = num1 - num2;
    const multi = num1 * num2;
    const divi = num1 / num2;
    const modulo = num1 % num2;
    // Se formatea una respuesta
    const respuesta = `Respuesta: Dados los números ${num1} y ${num2}, su suma es: ${suma}; su resta es: ${resta}; su multiplicación es: ${multi}; su división es: ${divi}; y su módulo es: ${modulo}.`;
    alert("El resultado fue escrito en la consola y en el documento");
    document.getElementById(id).innerHTML= respuesta;
    console.log(respuesta);
}

// Función que convierte grados Celsius a Kelvin y Fahrenheit. Se declara de forma anónima.
let deg = function(id) {
    // Se asigna a la variable
    let celsius = verifyNumber("Ingrese la temperatura en grados celsius (C°)" , false);
    // Se transforman las temperaturas a kevin y fahrenheit
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9/5) + 32;
    // Se formatea una respuesta
    const respuesta = `Respuesta: ${celsius}C° (celsius) corresponden a ${kelvin}K (kelvin) y a ${fahrenheit}°F (fahrenheit)`;
    alert("El resultado fue escrito en la consola y en el documento");
    document.getElementById(id).innerHTML= respuesta;
    console.log(respuesta);
}

// Función que calcula en base a días ingresados, los años, semanas y días. Se declara como arrow function
const daysToYears = (id) => {
    let daysInput = verifyNumber("Ingrese la cantidad de días" , true);
    // Constantes de cálculo
    const daysYear = 365;
    const daysWeek = 7;
    // Cálculos de años, semanas y días
    let years = Math.floor(daysInput / daysYear);
    let remainDays = daysInput - years * daysYear;
    let weeks = Math.floor(remainDays / daysWeek);
    remainDays = remainDays - weeks * daysWeek;
    // Se formatean los textos de respuesta
    let stringYears = (years == 1) ? `${years} año` : `${years} años`;
    let stringWeeks = (weeks == 1) ? `${weeks} semana` : `${weeks} semanas`;
    let stringDays = (remainDays == 1) ? `${remainDays} día` : `${remainDays} días`;
    const respuesta = `Respuesta: ${daysInput} días corresponden a: ${stringYears} con ${stringWeeks} y ${stringDays}.`;
    alert("El resultado fue escrito en la consola y en el documento");
    document.getElementById(id).innerHTML= respuesta;
    console.log(respuesta);
}

// Función que toma 5 elementos, devuelve la suma y promedio. Se declara como arrow function
const sumProm = (id) => {
    // Asignación de variables
    let num1 = verifyNumber("Ingrese el primer número entero" , false);
    let num2 = verifyNumber("Ingrese el segundo número entero" , false);
    let num3 = verifyNumber("Ingrese el tercer número entero" , false);
    let num4 = verifyNumber("Ingrese el cuarto número entero" , false);
    let num5 = verifyNumber("Ingrese el quinto número entero" , false);
    // Operaciones matemáticas
    const suma = num1 + num2 + num3 + num4 + num5;
    const promedio = suma / 5;
    // Se formatea un texto de respuesta
    const respuesta = `Respuesta: Dados los números: ${num1} , ${num2} , ${num3} , ${num4} y ${num5}; la suma de ellos es ${suma}; su promedio es ${promedio}`;
    alert("El resultado fue escrito en la consola y en el documento");
    document.getElementById(id).innerHTML= respuesta;
    console.log(respuesta);
}
