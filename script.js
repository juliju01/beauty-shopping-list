// Beauty Shopping List //

// Aplicação web para controle e cálculo de uma lista de compras //

// Mostrar ou ocultar as div (página inicial / Iniciar ou completar lista //

document.querySelector("#home").addEventListener("click", () => {
  escondeTodosAntesDeMostrar();
  document.querySelector("#inicialDiv").style.display = "block";
});

document.querySelector("#inserirproduto").addEventListener("click", () => {
  escondeTodosAntesDeMostrar();
  document.querySelector("#produtoDiv").style.display = "block";
});

document.querySelector("#calcular").addEventListener("click", () => {
  escondeTodosAntesDeMostrar();
  document.querySelector("#calcularDiv").style.display = "block";
});

function escondeTodosAntesDeMostrar() {
  document.querySelectorAll(".oculta").forEach((item) => {
    item.style.display = "none";
  });
}

//adicionando itens na lista//

const input = document.querySelector("#itemParaInserir");
const botao = document.querySelector("#addItemParaInserir");
const lista = document.querySelector("#lista");

function criaElementoNaLista(nomeDoProduto) {
  const li = document.createElement("li");
  let texto = document.createTextNode(nomeDoProduto);
  li.appendChild(texto);
  lista.appendChild(li);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const botaoExcluir = document.createElement("button");
  botaoExcluir.innerText = "X";
  li.appendChild(checkbox);
  li.append(texto);
  li.append(botaoExcluir);
  botaoExcluir.onclick = (e) => {
    li.remove();
    checkbox.addEventListener("click", (e) => {
      if (texto.style.textDecoration == "line-through") {
        texto.style.textDecoration = "none";
      } else {
        texto.style.textDecoration = "line-through";
        popup.style.display = "block";
      }
    });
  };
}

botao.addEventListener("click", (event) => {
  const valor = input.value;
  if (valor != "") {
    criaElementoNaLista(valor);
  } else {
    alert("Você deve digitar o nome do produto");
  }
});

const popup = document.createElement("li");
popup.style.display = "none";
lista.append(popup);

const valor = document.createElement("input");
valor.type = "number";

const botaoFinaliza = document.createElement("button");
botaoFinaliza.type = "number";
botaoFinaliza.innerText = "Insira o valor";

popup.append(valor);
popup.append(botaoFinaliza);

botaoFinaliza.addEventListener("click", () => {
  popup.style.display = "none";
  const preco = document.createElement("span");
  preco.innerText = "R$" + valor.value;
  texto.inserAdjacentElement("afterend", preco);
});

//local storage//

let arrayDaLista;

const inputText = document.querySelector("#texto");
const envia = document.querySelector("#envia");
const recebe = document.querySelector("#recebe");

const array = JSON.parse(localStorage.getItem("arrayDaLista"));
if (array) {
  arrayDaLista = array;
} else {
  arrayDaLista = [];
}

arrayDaLista.forEach((valorInterno) => {
  fazLi(valorInterno.valor);
});

envia.addEventListener("click", () => {
  const value = inputText.value;

  fazLi(value);

  arrayDeLIS.push({ valor: value });
  localStorage.setItem("arrayDaLista", JSON.stringify(arrayDaLista));
});

function fazLi(valorInterno) {
  const li = document.createElement("li");
  li.innerText = valorInterno;
  recebe.append(li);
}
