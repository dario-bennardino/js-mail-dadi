const emailAutorizzate = ['pippo@gmail.com', 'pluto@gmail.com', 'topolino@gmail.com', 'paperino@gmail.com', 'gastone@gmail.com'];

// Chiedo all'utente di inserire la sua email

const emailInserita = prompt('Inserisci la tua email');

//dichiaro emailValida di default falsa

let emailValida = false;

//inizio il processo di controllo validazione email tramite ciclo for

for (let i = 0; i < emailAutorizzate.length; i++) {
    if (emailAutorizzate[i] === emailInserita) {
        emailValida = true;

        break;
    }
}
 
//inserisco alert con messaggio sulla validità della email

if (emailValida) {
    alert ('Accesso valido Benvenuto!');
    
}else{
    alert ('Accesso negato email errata!');
}
    
    
