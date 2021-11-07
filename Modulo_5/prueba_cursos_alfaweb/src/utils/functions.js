const formatDate = date => date.toLocaleDateString("es-CL");

const terminado = estado => estado ? 'Si' : 'No';

const formatoMoneda = valor => new Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"}).format(valor)

export default { formatDate, terminado, formatoMoneda };