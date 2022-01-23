let imieUzytk = window.localStorage.getItem('name');
let nazwiskoUzytk = window.localStorage.getItem('surname');
let emailUzytk = window.localStorage.getItem('email');
let hasloUzytk = window.localStorage.getItem('password');
let rezerwacjeUzytk = [];
let dataRejestracji = window.localStorage.getItem('date');
document.getElementById('deleteProfil').addEventListener('click', usunProfil);
function usunProfil() {
  window.localStorage.clear();
  window.location.href = 'glowna.html';
}
document.getElementById('imieProfil').innerText += ' '+imieUzytk;
document.getElementById('nazwiskoProfil').innerText += ' '+nazwiskoUzytk;
document.getElementById('emailProfil').innerText += ' '+emailUzytk;
document.getElementById('dataProfil').innerText += ' '+dataRejestracji;