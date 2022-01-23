let imieUzytk = window.localStorage.getItem('name');
let nazwiskoUzytk = window.localStorage.getItem('surname');
let emailUzytk = window.localStorage.getItem('email');
let hasloUzytk = window.localStorage.getItem('password');
let rezerwacjeUzytk = JSON.parse(window.localStorage.getItem('rezerwacje'));
let dataRejestracji = window.localStorage.getItem('date');
document.getElementById('deleteProfil').addEventListener('click', usunProfil);
function usunProfil() {
  window.localStorage.clear();
  window.location.href = 'glowna.html';
  window.alert('Usunięto profil');
}
document.getElementById('imieProfil').innerText += ' ' + imieUzytk;
document.getElementById('nazwiskoProfil').innerText += ' ' + nazwiskoUzytk;
document.getElementById('emailProfil').innerText += ' ' + emailUzytk;
document.getElementById('dataProfil').innerText += ' ' + dataRejestracji;
function wyloguj() {
  window.localStorage.setItem('loggedIn', 'nie');
  window.location.href = 'glowna.html';
}
document.getElementById('logOut').addEventListener('click', wyloguj);

let paren = document.getElementById('rezerwacje');
for (let i = 0; i < rezerwacjeUzytk.length; i++) {
    let h = document.createElement('li');
    h.innerText = rezerwacjeUzytk[i];
    paren.appendChild(h);
}
document.getElementById('deleteRez').addEventListener('click', function(){
    window.localStorage.removeItem('rezerwacje');
    rezerwacjeUzytk =[];
    window.location.reload()
});

document.getElementById('changePass').addEventListener('click', function(){
    let h = window.prompt("Podaj obecne hasło!");
    if(h!=hasloUzytk)
    {
        window.alert("Niepoprawne hasło!")
    }
    let nh;
    let nh2;
    do{
    nh = window.prompt("Podaj nowe hasło!");
    nh2 = window.prompt("Potwierdź nowe hasło!");
    if(nh!=nh2){
        alert("hasła się nie zgadzają!");
    }
    else if(nh==h){
        alert("Hasło nie może być takie samo jak poprzednie!");
        nh2=null;
    }
    }while(nh!=nh2);
    alert("Hasło zostało zmienione");
    hasloUzytk = nh;
    window.localStorage.setItem('password', nh2);
    window.location.reload()
});