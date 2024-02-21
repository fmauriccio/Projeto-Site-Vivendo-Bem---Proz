function verificarLogin() {
  var usuarioLogado = localStorage.getItem("usuarioLogado");
  if (!usuarioLogado) {
    window.location.href = "index.html";
  }
}

function fazerLogout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
}
