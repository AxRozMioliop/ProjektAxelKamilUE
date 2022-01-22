window.localStorage.setItem('loggedIn', false);
let imieUzytk = window.localStorage.getItem('name');
let nazwiskoUzytk = window.localStorage.getItem('surname');
let emailUzytk = window.localStorage.getItem('email');
let hasloUzytk = window.localStorage.getItem('password');
let rezerwacjeUzytk = [];
let dataRejestracji = window.localStorage.getItem('date');

function zaloguj() {
  window.localStorage.setItem('loggedIn', false);
}
document.getElementById("logIn").addEventListener("click", zaloguj)
function rejestruj(){
  imieUzytk = window.prompt("Podaj imię");
  nazwiskoUzytk = window.prompt("Podaj Nazwisko");
  emailUzytk = window.prompt("Podaj email");
  hasloUzytk = window.prompt("Podaj hasło");
  dataRejestracji = Date.now();
  window.localStorage.setItem('name', imieUzytk);
  window.localStorage.setItem('surname', nazwiskoUzytk);
  window.localStorage.setItem('email', emailUzytk);
  window.localStorage.setItem('date', dataRejestracji);
  window.localStorage.setItem('password', hasloUzytk);
  window.localStorage.setItem('loggedIn', true);
}
document.getElementById("signIn").addEventListener("click", rejestruj);
if(window.localStorage.getItem('loggedIn')){
  document.getElementById("link1").classList.remove("profile");
  document.getElementById("link2").classList.remove("profile");
  document.getElementById("imieProfil").innerHTML = imieUzytk;
  document.getElementById("nazwiskoProfil").innerHTML = nazwiskoUzytk;
  document.getElementById("emailProfil").innerHTML = emailUzytk;
  document.getElementById("dataProfil").innerHTML = dataRejestracji;
}
else{
  document.getElementById("link1").classList.add("profile");
  document.getElementById("link2").classList.add("profile");
}