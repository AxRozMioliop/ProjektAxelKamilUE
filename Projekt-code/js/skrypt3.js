function wyloguj() {
    window.localStorage.setItem('loggedIn', "nie");
    window.location.href="glowna.html";
  }
  document.getElementById('logOut').addEventListener('click', wyloguj);