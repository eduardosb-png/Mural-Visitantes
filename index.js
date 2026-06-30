// ===== Questão 3: Selecionar elementos da página inicial =====
const titulo = document.getElementById("titulo-principal");
const textoExplicativo = document.querySelector("#texto-explicativo");
const linkEntrar = document.getElementById("link-entrar");
const mensagemStatus = document.getElementById("mensagem-status");

// Mostrar um elemento selecionado no Console
console.log(titulo);

// Alterar uma mensagem da página usando textContent
textoExplicativo.textContent = "Você está acessando como visitante. Fique à vontade para explorar o mural!";

// Alterar uma cor/estilo usando style
titulo.style.color = "#2563eb";

// ===== Questão 4: Evento de clique no link/botão de entrada =====
linkEntrar.addEventListener("click", (evento) => {
  evento.preventDefault();

  mensagemStatus.textContent = "Entrando no mural... aguarde um instante.";
  mensagemStatus.style.color = "#16a34a";

  console.log("Visitante clicou para entrar no mural.");

  setTimeout(() => {
    window.location.href = "home.html";
  }, 800);
});
