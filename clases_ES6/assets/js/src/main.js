import Impuestos from './impuestos.js';
import Cliente from './cliente.js';

// Selecciona elementos que lanzan el evento y que recibe el resultado
let calcular = document.querySelector("#calcular");
let textoImpuesto = document.querySelector('#textoImpuesto');

// Captura el evento
calcular.addEventListener('click' , () => {
    textoImpuesto.innerHTML = '';
    let nombre = document.querySelector('#nombre').value;
    let montoBrutoAnual = document.querySelector('#montoBrutoAnual').value;
    let deducciones = document.querySelector('#deducciones').value;

    // Limpia errores
    limpiarErrores();

    //Validar datos
    let datosOK = validaDatos(nombre, montoBrutoAnual, deducciones);

    if(datosOK){
        // Se instancian las clases con los datos validados
        let impuestos1 = new Impuestos(parseInt(montoBrutoAnual), parseInt(deducciones));
        let cliente1 = new Cliente(nombre, impuestos1);

        // Limpia los input
        limpiaInputs();

        let impuestoCalculado = cliente1.calcularImpuesto();
        let texto = `El cliente ${cliente1.nombre} tuvo ingresos por ${impuestos1.monto_bruto_anual} y gastos por ${impuestos1.deducciones} obteniendo `;
        if(impuestoCalculado > 0) {
            texto += `una utilidad neta de ${impuestos1.monto_bruto_anual - impuestos1.deducciones}, por lo que debe pagar ${impuestoCalculado.toFixed()} en impuestos`;
        }
        else {
            texto  += `un resultado neto de ${impuestos1.monto_bruto_anual - impuestos1.deducciones}, por lo que no debe pagar impuestos`;
        }
        textoImpuesto.innerHTML = texto;
    }
    
});

// Función que limpia los contenedores de los errores
const limpiarErrores = () => {
    document.querySelector('#error-nombre').innerHTML = '';
    document.querySelector('#error-monto-bruto').innerHTML = '';
    document.querySelector('#error-deducciones').innerHTML = '';
}

// Función que llimpia los inputs
const limpiaInputs = () => {
    document.querySelector('#nombre').value = "";
    document.querySelector('#montoBrutoAnual').value = "";
    document.querySelector('#deducciones').value = "";
}

// Función que valida los datos ingresados por el usuario
const validaDatos = (nombre, montoBruto, deducciones) => {
    let validaOK = true;
    let validaNombre = /^[A-Za-z]+[A-Za-z'-]{2,}/gim;

    if(validaNombre.test(nombre) === false) {
        document.querySelector('#error-nombre').innerHTML = 'El dato ingresado no es un nombre válido';
        validaOK = false;
    }

    let validaNumero = /^\d+$/;

    if(validaNumero.test(montoBruto) === false) {
        document.querySelector('#error-monto-bruto').innerHTML = 'El monto bruto ingresado no es un número entero.';
        validaOK = false;
    }

    if(validaNumero.test(deducciones) === false) {
        document.querySelector('#error-deducciones').innerHTML = 'El monto de las deducciones no es un número entero';
        validaOK = false;
    }
    return validaOK;
}