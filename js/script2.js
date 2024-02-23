// Estrazione 2 numeri con due dadi diversi giocatore e computer

const gioca = function() {

    //genero due estrazioni da 1 a 6 random

    const dadoGiocatore = Math.floor(Math.random() * 6) + 1;

    const dadoComputer = Math.floor(Math.random() * 6) + 1;

// Mostra i risultati nella console


    console.log(`Il giocatore ha ottenuto: ${dadoGiocatore}`);

    console.log(`Il computer ha ottenuto: ${dadoComputer}`);

    if (dadoGiocatore > dadoComputer) {
        console.log('Il giocatore vince!');

    } else if (dadoGiocatore < dadoComputer) {
        console.log('Il computer vince!');

    } else {
        console.log('È un pareggio!');
    }

}
