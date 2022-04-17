// Beauty Shopping List //

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

//Adicionando itens na lista //

const input = document.querySelector("#itemParaInserir");
const botao = document.querySelector("#addItemParaInserir");
const lista = document.querySelector("#lista");

botao.addEventListener("click", (event) => {
  const valor = input.value;
  if (valor != "") {
    criaElementoNaLista(valor);
  } else {
    alert("Por favor, digite o nome do produto");
  }
});

function criaElementoNaLista(nomeDoProduto) {
  const li = document.createElement("li");
  lista.appendChild(li);

  const span = document.createElement("span");
  span.innerText = nomeDoProduto;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const botaoDeletar= document.createElement("button");
  botaoDeletar.innerText = "x";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.append(botaoDeletar);

  checkbox.addEventListener("click", (e) => {
    if (span.style.textDecoration == "line-through") {
      span.style.textDecoration = "none";
    } else {
      popup.style.display = "block";
    }
  });
  botaoDeletar.onclick = (e) => {
    li.remove();
  };

  const popup = document.createElement("li");
  popup.style.display = "none";
  lista.append(popup);

  const valor = document.createElement("input");
  valor.type = "number";

  const botaoItemJaComprado = document.createElement("button");

  botaoItemJaComprado.type = "number";
  botaoItemJaComprado.innerText = "Inserir o valor do produto (somente números, em reais)";

  popup.append(valor);
  popup.append(botaoItemJaComprado);

  botaoItemJaComprado.addEventListener("click", () => {
    popup.style.display = "none";
    const preco = document.createElement("span");
    preco.innerText = "R$" + valor.value;
    span.style.textDecoration = "line-through";
    realizaSoma(valor.value);
  });
}

 // função para somar os produtos já comprados //

let soma = 0; 

function realizaSoma(novoValor){
  novoValor = parseFloat(novoValor);
  soma = soma + novoValor;    //esse valor de soma recebe o que era antes, em um momento que a função não sabe ainda o que vem //
  const resultadoFinalDaSoma = document.querySelector(".resultadoFinalDaSoma");
  resultadoFinalDaSoma.innerText = 'R$' + soma;
}

// LocalStorage, salvando os dados do usuário no LocalStorage do navegador //

const textoDoInput = document.querySelector("#itemParaInserir")

function criaNovaLi(textoDoInput){
  li.innerText = textoDoInput
  textoDoInput.append(li)
  arrayDaLista.forEach((textoDoInput)=>{
  criaLI(span.valor)
  })

  addItemParaInserir.addEventListener("click",()=>{
    const valorAtribuidoPeloUser = spanStorage.value;
    criaNovaAli(valorAtribuidoPeloUser)
    arrayDaLista.push({valor:valorAtribuidoPeloUser})
    localStorage.setItem("arrayDaLista",JSON.stringify(arrayDaLista))
})
}

let arrayDaLista;
let array = JSON.parse(localStorage.getItem("arrayDaLista"))
if(array){
    arrayDaLista = array
}else{
    arrayDaLista = []
}