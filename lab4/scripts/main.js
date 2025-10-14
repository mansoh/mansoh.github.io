let zona = document.getElementById("zona");
zona.onmouseover = function() {
  zona.textContent = "Olá!";
}
zona.onmouseout = function() {
  zona.textContent = "Passa o rato aqui!";
}

function pintar(cor) {
  document.getElementById("caixa").style.backgroundColor = cor;
}

function mostrar() {
  let txt = document.getElementById("campo").value;
  document.getElementById("saida").textContent = txt;
}

function mudarCor() {
  let cor = document.getElementById("cor").value;
  document.body.style.backgroundColor = cor;
}

let counter = 0;
function contar() {
   const heading = document.getElementById("contador");
   counter++;
   heading.textContent = counter;
} 

function aumentar() {
  document.querySelector("img").style.transform = "scale(1.2)";
}

function normal() {
  document.querySelector("img").style.transform = "scale(1)";
}