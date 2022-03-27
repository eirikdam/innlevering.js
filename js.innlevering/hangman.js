//lager array so  har de forskjellige ordene
let dyr = [
    "kamel",
    "katt",
    "hund",
    "gris",
    "geit",
    "hest",
    "ku",
    "esel",
    "ape",
    "slange"
]

//deklarerer ulika variabler som blir brukt flere steder i koden
let svarEl = '';
let maxFeil = 6;
let feilEl = 0;
let guessed = [];
let ordStatus = null;

//funksjon som trekker ut et tilfeldig ord
function tilfeldigOrd() {
  svarEl = dyr[Math.floor(Math.random() * dyr.length)];
}

//genererer tastene, og implemetærer de inn i html
function genererTastatur() {
  let knappEl = 'abcdefghijklmnopqrstuvwxyzæøå'.split('').map(Boks =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + Boks + `'
        onClick="handleGuess('` + Boks + `')"
      >
        ` + Boks + `
      </button>
    `).join('');

  document.getElementById('tastatur').innerHTML = knappEl;
}
//funksjon som håndterer de ulike gjettene 
function handleGuess(chosenBoks) {
  guessed.indexOf(chosenBoks) === -1 ? guessed.push(chosenBoks) : null;
  document.getElementById(chosenBoks).setAttribute('disabled', true);

  if (svarEl.indexOf(chosenBoks) >= 0) {
    gjettetOrd();
    sjekkW();
  } else if (svarEl.indexOf(chosenBoks) === -1) {
    feilEl++;
    oppdaterFeil();
    sjekkL();
    oppdaterBilde();
  }
}

//funksjon som oppdaterer bilde hver gang de tas feil. 
function oppdaterBilde() {
  document.getElementById('hangmanPic').src = 'bilder/' + feilEl + '.jpg';
}

//sjekker etter seier 
function sjekkW() {
  if (ordStatus === svarEl) {
    document.getElementById('tastatur').innerHTML = 'Gratulerer du gjettet dyret!!';
  }
}
//sjekker etter tap
function sjekkL() {
  if (feilEl === maxFeil) {
    document.getElementById('dyret').innerHTML = 'Riktig svar var:  ' + svarEl;
    document.getElementById('tastatur').innerHTML = 'Du tapte!';
  }
}

//legger til hver bokstav
function gjettetOrd() {
  ordStatus = svarEl.split('').map(Boks => (guessed.indexOf(Boks) >= 0 ? Boks : " _ ")).join('');

  document.getElementById('dyret').innerHTML = ordStatus;
}
//oppdaterer feil telleren 
function oppdaterFeil() {
  document.getElementById('feil').innerHTML = feilEl;
}
//funksjon for å starte spillet på nytt
function reset() {
  feilEl = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = 'bilder/0.jpg';

  tilfeldigOrd();
  gjettetOrd();
  oppdaterFeil();
  genererTastatur();
}

document.getElementById('maxFeil').innerHTML = maxFeil;

tilfeldigOrd();
genererTastatur();
gjettetOrd();
