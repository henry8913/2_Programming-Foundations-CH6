// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//___________________//___________________//___________________//___________________//___________________//___________________//

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//___________________//___________________//___________________//___________________//___________________//___________________//

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function cambiaTitolo(nuovoTitolo) {
    const titolo = document.querySelector('h1');
    titolo.textContent = nuovoTitolo;
    console.log("Il nuovo titolo è: " + nuovoTitolo);
}

cambiaTitolo("Black Friday 2024: Offerte e Sconti Migliori");

//___________________//___________________//___________________//___________________//___________________//___________________//

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function cambiaColore(nuovoColore) {
    document.body.style.backgroundColor = nuovoColore;
    console.log("Il nuovo colore background è: " + nuovoColore);
}

cambiaColore("orange")

//___________________//___________________//___________________//___________________//___________________//___________________//

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function cambiaIndirizzo(nuovoIndirizzo) {
    const indirizzo = document.querySelector('h4');
    indirizzo.textContent = nuovoIndirizzo;
    console.log("Il nuovo indirizzo è: " + nuovoIndirizzo)
}

cambiaIndirizzo("Indirizzo: 1600 Pennsylvania Avenue NW, Washington, DC 20500, USA")

//___________________//___________________//___________________//___________________//___________________//___________________//

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function aggiungiClasseLinkAmazon(classe) {
    const linkAmazon = document.querySelectorAll('table a[href*="amazon.it"]');
    linkAmazon.forEach(link => {
        link.classList.add(classe);
    });
    console.log(`Classe "${classe}" aggiunta a ${linkAmazon.length} link Amazon.`);
}

aggiungiClasseLinkAmazon("amazon-link");

//___________________//___________________//___________________//___________________//___________________//___________________//

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function toggleClasseImmagini(classe) {
    const immagini = document.querySelectorAll('table img');
    immagini.forEach(immagine => {
        immagine.classList.toggle(classe);
    });
    console.log(`La classe "${classe}" è stata alternata per tutte le immagini.`);
}

toggleClasseImmagini("nascondi");

//___________________//___________________//___________________//___________________//___________________//___________________//

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

document.addEventListener("DOMContentLoaded", () => {
    cambiaColorePrezzi();
});

function cambiaColorePrezzi() {
    const prezzi = document.querySelectorAll('table tbody td:nth-child(4)');
    prezzi.forEach(prezzo => {
        const coloreCasuale = generaColoreCasuale();
        prezzo.style.color = coloreCasuale;
    });
    console.log("I colori dei prezzi sono stati aggiornati automaticamente!");
}

function generaColoreCasuale() {
    const lettere = '0123456789ABCDEF';
    let colore = '#';
    for (let i = 0; i < 6; i++) {
        colore += lettere[Math.floor(Math.random() * 16)];
    }
    return colore;
}

//___________________//___________________//___________________//___________________//___________________//___________________//



