let wynikOstateczny;
if (!window.localStorage.getItem('rezerwacje')) {
  wynikOstateczny = [];
} else {
  wynikOstateczny = JSON.parse(window.localStorage.getItem('rezerwacje'));
}

let rezBut = document.getElementsByClassName('rezerw');
let link = document.getElementsByTagName('a');
let tableCell = document.getElementsByTagName('td');

document.getElementById('logOut').addEventListener('click', wyloguj);

if (wynikOstateczny == []) {
  for (let i = 0; i < tableCell.length; i++) {
    tableCell[i].classList.remove('color');
  }
}

for (let i = 0; i < rezBut.length; i++) {
  rezBut[i].addEventListener('click', function () {
    if (wynikOstateczny.length == 10) {
      alert('Nie możesz już więcej rezerwować!');
    } else {
      let y = rezBut[i].innerText;
      let juzRezerwacja = false;
      for (let g = 0; g < wynikOstateczny.length; g++) {
        if (y == wynikOstateczny[g]) {
          juzRezerwacja = true;
        }
      }
      if (juzRezerwacja) {
        alert('Już masz ten termin');
      } else {
        if (window.confirm('Czy chcesz zarezerwować termin?')) {
          wynikOstateczny.push(y);
          alert('Zarezerwowano termin');
          rezBut[i].parentElement.classList.add('color');
          console.log(wynikOstateczny);
        } else {
          alert('Nie zarezerwowano terminu');
        }
      }
    }
  });
}

for (let f = 0; f < link.length; f++) {
  link[f].addEventListener('click', koniecRez);
}

function koniecRez() {
  window.localStorage.setItem('rezerwacje', JSON.stringify(wynikOstateczny));
}

function wyloguj() {
  window.localStorage.setItem('loggedIn', 'nie');
  window.location.href = 'glowna.html';
}
