export default class Cliente{
    constructor(nombre, impuestos){
        this._nombre = nombre;
        this._impuestos = impuestos;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    // Calcula el impuesto, este método debería ir en la clase impuestos pero los requerimientos lo pedían en la clase cliente
    calcularImpuesto(){
        this._impuestos = (this._impuestos.monto_bruto_anual - this._impuestos.deducciones) * (21 / 100);
        return this._impuestos;
    }
}