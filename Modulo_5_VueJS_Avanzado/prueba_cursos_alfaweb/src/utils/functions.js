const formatDate = date => {
    if(!date) return null;

    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
}

const terminado = estado => estado ? 'Si' : 'No';

const formatoMoneda = valor => new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(valor)

export default { formatDate, terminado, formatoMoneda };