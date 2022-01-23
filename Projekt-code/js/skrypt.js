let imieUzytk = window.localStorage.getItem('name');
let nazwiskoUzytk = window.localStorage.getItem('surname');
let emailUzytk = window.localStorage.getItem('email');
let hasloUzytk = window.localStorage.getItem('password');
let rezerwacjeUzytk = [];
let dataRejestracji = window.localStorage.getItem('date');
let zalogowany = window.localStorage.getItem('loggedIn');
let zmienna1;
let zmienna2;

console.log(
  imieUzytk,
  nazwiskoUzytk,
  emailUzytk,
  hasloUzytk,
  dataRejestracji,
  zalogowany
);

document.getElementById('logIn').addEventListener('click', zaloguj);
document.getElementById('signIn').addEventListener('click', rejestruj);

function zaloguj() {
  if (
    imieUzytk != null ||
    emailUzytk != null ||
    hasloUzytk != null ||
    nazwiskoUzytk != null
  ) {
    zmienna1 = window.prompt('Podaj Email!');
    zmienna2 = window.prompt('Podaj Haslo!');
    if (zmienna1 != emailUzytk || zmienna2 != hasloUzytk) {
      alert('Błędny email lub hasło!');
    } else {
      alert('Witamy ponownie!');
      window.localStorage.setItem('loggedIn', "tak");
      window.location.reload();
    }
  } else {
    alert('Brak Zarejestrowanego użytkownika!');
  }
}

function changeButtons() {
  let akcja = document.getElementById('notLogIn');
  let but1 = document.getElementById('logIn');
  let but2 = document.getElementById('signIn');
  akcja.setAttribute('id', 'loggedIn');
  akcja.removeChild(but1);
  akcja.removeChild(but2);
  newBut = document.createElement('button');
  newBut.innerText = 'Wyloguj się';
  newBut.setAttribute('id', 'logOut');
  akcja.appendChild(newBut);
  document.getElementById('logOut').addEventListener('click', wyloguj);
}

function revertButtons() {
  let akcja = document.getElementById('loggedIn');
  let but1 = document.getElementById('logOut');
  akcja.setAttribute('id', 'notLogIn');
  akcja.removeChild(but1);
  newBut = document.createElement('button');
  newBut2 = document.createElement('button');
  newBut.innerText = 'Zaloguj się';
  newBut2.innerText = 'Zarejestruj się';
  newBut.setAttribute('id', 'logIn');
  newBut.setAttribute('id', 'signIn');
  akcja.appendChild(newBut);
  akcja.appendChild(newBut2);
}

function rejestruj() {
  imieUzytk = window.prompt('Podaj imię');
  nazwiskoUzytk = window.prompt('Podaj Nazwisko');
  emailUzytk = window.prompt('Podaj email');
  hasloUzytk = window.prompt('Podaj hasło');
  n = new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  dataRejestracji = d + '.' + m + '.' + y;
  window.localStorage.setItem('name', imieUzytk);
  window.localStorage.setItem('surname', nazwiskoUzytk);
  window.localStorage.setItem('email', emailUzytk);
  window.localStorage.setItem('date', dataRejestracji);
  window.localStorage.setItem('password', hasloUzytk);
  window.localStorage.setItem('loggedIn', "tak");
  window.location.reload();
}

function wyloguj() {
  window.localStorage.setItem('loggedIn', "nie");
  revertButtons();
  window.location.reload();
}
if (zalogowany=="nie") {
  document.getElementById('link1').classList.add('profile');
  document.getElementById('link2').classList.add('profile');
  revertButtons();
} if(zalogowany=="tak") {
  document.getElementById('link1').classList.remove('profile');
  document.getElementById('link2').classList.remove('profile');
  changeButtons();
}