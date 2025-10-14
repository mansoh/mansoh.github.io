let zona = document.getElementById("zona");
zona.onmouseover = function() {
  zona.textContent = "Olá!";
}
zona.onmouseout = function() {
  zona.textContent = "Passa o rato aqui!";
}

function pintar(cor) {
  document.getElementById("caixa").style.color = cor;
}

//4.
function mudarCor() {
  let cor = document.getElementById("cor").value;
  document.body.style.backgroundColor = cor;
}
//contador no 5.
const numero = document.querySelector("#numero");
const botao = document.querySelector("#botaoConta");

if (!localStorage.getItem('contador')) {
  localStorage.setItem('contador', 0)
}
numero.textContent = localStorage.getItem('contador');

function contar() {
let counter = localStorage.getItem('contador');
counter++;
numero.textContent = counter;
localStorage.setItem('contador', counter);
}

botao.onclick = contar;
//trocar cores no 3.
const input = document.querySelector("#escrever input")
const cores = ['red', 'green', 'blue']
let i = 0
function colorir() {
input.style.backgroundColor = cores[i]
i++;
if (i >= 3) i = 0
}

input.addEventListener("input", colorir)