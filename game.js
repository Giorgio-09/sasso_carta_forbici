let btn_avvio = document.getElementById("btn_avvio");
let btn_scelta = document.querySelectorAll(".btn_scelta");

let display = document.getElementById('risultato');
let display_computer = document.getElementById('computer');
let display_giocatore = document.getElementById('giocatore');

let sceltaGiocatore = null; 
 
// Scelta del giocatore
btn_scelta.forEach(button => {
  button.addEventListener('click', () => {
    sceltaGiocatore = button.getAttribute('value');
    gioco(sceltaGiocatore); // mostra subito l'immagine del giocatore
  });
});

// Avvio partita
btn_avvio.addEventListener('click', () => {
  if (!sceltaGiocatore) {
    display.value = "Scegli prima una mossa!";
    return;
  }

  btn_avvio.style.backgroundColor = 'grey';

  let time = 3;
  display.value = time;

  const countdown = setInterval(() => {
    time--;
    display.value = time;

    if (time <= 0) {
      clearInterval(countdown);

      // scelta random del computer
      const scelta_computer = Math.floor(Math.random() * 3) + 1;
      display_computer.className = 'giocata_' + scelta_computer;

      // mostra risultato finale
      risultatoFinale(sceltaGiocatore, scelta_computer);
    }
  }, 1000);
});

// Mostra immagine del giocatore
function gioco(value) {
  display_giocatore.className = 'giocata_' + value;
}

// Calcolo risultato
function risultatoFinale(value, scelta_computer) {
  if (value == scelta_computer) {
    display.value = "PAREGGIO!";
  } else if (
    (value == '1' && scelta_computer == 3) ||
    (value == '2' && scelta_computer == 1) ||
    (value == '3' && scelta_computer == 2)
  ) {
    display.value = "HAI VINTO!";
  } else {
    display.value = "HAI PERSO!";
  }
}
