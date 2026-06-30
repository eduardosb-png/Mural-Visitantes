// ===== Questão 7: Selecionar os principais elementos do mural =====
const tituloMural = document.getElementById("titulo-mural");
const textoBoasVindas = document.querySelector("#texto-boasvindas");
const btnCriarPostagem = document.getElementById("btn-criar-postagem");
const btnDestacarMural = document.getElementById("btn-destacar-mural");
const areaMural = document.getElementById("area-mural");
const mensagemMural = document.getElementById("mensagem-mural");

// Mostrar pelo menos dois elementos selecionados no Console
console.log(tituloMural);
console.log(areaMural);

// ===== Questão 9 (parte 1): boas-vindas com textContent ao carregar a página =====
textoBoasVindas.textContent = "Bem-vindo(a) ao mural! Sinta-se à vontade para postar.";

// Variável contador para numerar as postagens (Questão 8)
let contador = 0;

// ===== Questão 8: Criar postagens automáticas =====
btnCriarPostagem.addEventListener("click", () => {
  contador = contador + 1;

  const novaPostagem = document.createElement("p");
  novaPostagem.textContent = "Postagem número " + contador;
  novaPostagem.classList.add("postagem");
  novaPostagem.classList.add("destaque");

  areaMural.appendChild(novaPostagem);

  // ===== Questão 9 (parte 2): mensagem com innerHTML e <strong> =====
  mensagemMural.innerHTML = "Sua <strong>postagem número " + contador + "</strong> foi criada com sucesso!";

  console.log("Postagem criada: número " + contador);
});

// ===== Questão 10: Destacar o mural usando classList =====
btnDestacarMural.addEventListener("click", () => {
  areaMural.classList.toggle("destaque");
  console.log("Visual do mural alternado.");
});
