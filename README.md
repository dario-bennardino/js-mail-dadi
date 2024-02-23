Esercizio mail
===
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
## Svolgimento
1. dichiariamo il mio array inserendo delle email inventate
2. chiedo all'utente di inserire la sua mail tramite prompt
3. faccio una let dichiarnto la mail autorizzata falsa
4. faccio un ciclo for per l'intera lunghezza del contenuto dell'array che contiene la lista delle mail autorizzate e creo delle condizioni con if
5. se il valore della mail che inserisce l'utente === al valore contenuto nella lista delle mail autorizzate allora email autorizzata non sarà più false ma true e chiudo il ciclo.
6. stampo il messagggio con alert utilizzando if email autorizzata allora alert accesso completato else alert accesso negato <br>

## Esercizio Dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
## Svolgimento
1. creo in html il bottone con bootstrap ed applico la proprietà onclick "gioca", ed un h1
2. creo in javascript la const gioca del bottone ed assegno la funzione{ generando l'estrazione dei due numeri random}
3. Con if mi creo le tre posibili situazuioni di estrazione con vittoria giocatore: <br>se il suo numero è maggiore del numero del computer e faccio console.log e messaggio<br>Vittoria del computer se il numero del giocatore è minore del numero del computer e faccio console log con messaggio <br> 
Il pareggio se il numero del giocatore è uguale al numero del computer e messaggio.






