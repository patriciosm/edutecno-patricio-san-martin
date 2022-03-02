const cachipun = () => {
    let stringResultado = "";
    let challenges = 0;
    let test = false;
    // Variables acumuladoras
    let winGames = 0;
    let lostGames = 0;
    let tiedGames = 0;

    // Se solicita número de partidas, en caso que no sea número se vuelve a solicitar el ingreso de un número
    while(test == false){
        challenges = parseInt(prompt("Ingrese la cantidad de duelos que desea jugar"));
        if(Number.isInteger(challenges)){
            test = true;
        }
        else {
            alert("Ingrese un número válido");
        }
    }

    // Ciclo de ejecución de las partidas 
    for( let i = 1; i <= challenges; i++ ) {
        let machine = Math.floor(Math.random() * 3);
        let player = parseInt(prompt("Escribe tu opción:  0 (papel) 1 (tijeras)  2 (piedra)"));
        
        if (player >= 0 && player <= 2) {
            resultado = player - machine;
            switch (resultado) {
                case 0: stringResultado = "Empate";
                        tiedGames++;
                    break;
                case 1: stringResultado = "Ganaste";
                        winGames++;
                    break;
                case -2: stringResultado = "Ganaste";
                        winGames++;
                    break;
                default: stringResultado = "Perdiste";
                        lostGames++;
                    break;
            };        
            // Resultados parciales    
            console.log(`Partida N° ${i}`);
            console.log(`Máquina: ${machine} => ${transform(machine)}`);
            console.log(`Jugador: ${player} => ${transform(player)}`);
            alert(`${stringResultado} \n \n Máquina => ${transform(machine)} vs ${transform(player)} <= Jugador`);
        }
        else {
            alert("La opción ingresada está fuera del rango, vuelva a intentarlo");
            i--;
        }
    }
    // Resultado y estadística final
    console.log(`Partidas jugadas: ${challenges}. Partidas ganadas: ${winGames}. Partidas perdidas: ${lostGames}. Partidas empatadas: ${tiedGames}`);
    if(winGames == lostGames) {
        alert(`Empate: jugador ${winGames} vs ${lostGames} máquina`);
    }
    else if (winGames > lostGames){
        alert(`Ganaste: jugador ${winGames} vs ${lostGames} máquina`);
    }
    else {
        alert(`Perdiste: jugador ${winGames} vs ${lostGames} máquina`);
    }
}

// transforma número de opción elegida a texto
const transform = (id) => {
    let jugada = "";
    switch (id) {
        case 0: jugada = "papel";
                        break;
        case 1: jugada = "tijeras";
                        break;
        case 2: jugada = "piedra";
                        break;
        default: break;
    }
    return jugada;
}

document.getElementById("jugar").addEventListener('click', cachipun);