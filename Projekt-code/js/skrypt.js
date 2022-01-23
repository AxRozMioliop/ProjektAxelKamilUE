let imieUzytk = window.localStorage.getItem('name');
let nazwiskoUzytk = window.localStorage.getItem('surname');
let emailUzytk = window.localStorage.getItem('email');
let hasloUzytk = window.localStorage.getItem('password');
let rezerwacjeUzytk = [];
let dataRejestracji = window.localStorage.getItem('date');

console.log(
  imieUzytk,
  nazwiskoUzytk,
  emailUzytk,
  hasloUzytk,
  dataRejestracji,
  window.localStorage.getItem('loggedIn')
);

function zaloguj() {
  window.localStorage.setItem('loggedIn', true);
}
document.getElementById('logIn').addEventListener('click', zaloguj);
function rejestruj() {
  imieUzytk = window.prompt('Podaj imię');
  nazwiskoUzytk = window.prompt('Podaj Nazwisko');
  emailUzytk = window.prompt('Podaj email');
  hasloUzytk = window.prompt('Podaj hasło');
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  dataRejestracji = d+'.'+m+'.'+y;
  window.localStorage.setItem('name', imieUzytk);
  window.localStorage.setItem('surname', nazwiskoUzytk);
  window.localStorage.setItem('email', emailUzytk);
  window.localStorage.setItem('date', dataRejestracji);
  window.localStorage.setItem('password', hasloUzytk);
  window.localStorage.setItem('loggedIn', true);
  window.location.reload();
}
typeof document.getElementById('signIn')
  ? document.getElementById('signIn').addEventListener('click', rejestruj)
  : console.log('brak elementu');
if (window.localStorage.getItem('loggedIn')) {
  document.getElementById('link1').classList.remove('profile');
  document.getElementById('link2').classList.remove('profile');
} else {
  document.getElementById('link1').classList.add('profile');
  document.getElementById('link2').classList.add('profile');
}
console.log(document.getElementById('imieProfil'));


