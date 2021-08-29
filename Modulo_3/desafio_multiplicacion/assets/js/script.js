// Se valida el valor ingresado
const validation = () => {
    let num = 0;
    let test = false;
    while( test == false) {
        num = parseInt(prompt("Ingrese un número entre 1 y 20"));
        if(Number.isInteger(num)) {
            if( num > 0 && num <=20 ) {
                test = true;
                return num;
            }
            else{
                alert("Número fuera de rango.");
            }
        }
        else {
            alert("No ha ingresado un número.");
        }
    }
}

// Crea tabla de multiplicación hasta el número ingresado además calcula su factorial
const multiFactorial = () => {
    let num = validation();
    let estructura = "";
    for(let i = 1; i <= num; i++) {
        estructura += `${i} x ${num} = ${i * num}<br>`;
        console.log(`${i} x ${num} = ${i * num}`);
        if(i == num) {
            let acum = 1;
            estructura += "<br>";
            for(let j = 1; j <= i; j++) {
                acum *= j;
                estructura += `Factorial de ${j} es: ${acum}<br>`;
                console.log(`Factorial de ${j} es: ${acum}`);
            }
        }
    }
    document.getElementById("respuesta").innerHTML = estructura;
}

document.getElementById("boton").addEventListener('click', multiFactorial);