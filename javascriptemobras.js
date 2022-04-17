

//Colocar um GIF do produto digitado//

const gifDoProduto = document.querySelector ("gifprodutodiv")

async function importarGif(paramNome){
    gifDoProduto.src = IMG_PALCEHOLDER_URL; //TROCA IMAGEM PRO PLACEHOLDER POR UM TEMPO CURTO//

    let urlInicial, fetchResposta, urlFinal;
    urlInicial = "https://api.giphy.com/v1/gifs/search?api_key=dpPu1kIHwa3fxoQiH9lzTfmUkMgEjtuS&q"
    urlInicial += paramNome;

    try {
fetchResposta = awaitfech (urlInicial)
urlFinal = await fetchResposta.json();
urlFinal = urlFinal.data(0).images.fixed.width.url;
gifDoProduto.src = urlFinal;
return;
    }
 
// Local Storage //

const inputText = document.querySelector("#texto")
const envia = document.querySelector("#envia")
const recebe = document.querySelector("#recebe")

let arrayLista;

arrayLista.forEach((valorInterno)=>{
  criaLI(valorInterno.valor)
})


let array = JSON.parse(localStorage.getItem("arrayLista"))
if(array){
    arrayLista = array
}else{
    arrayLista = []
}

envia.addEventListener("click",()=>{
    const value = inputText.value;
  
    criaLI(value)

    arrayLista.push({valor:value})
    localStorage.setItem("arrayLista",JSON.stringify(arrayLista))
})

function criaLI(valorInterno){
    const li = document.createElement("li")
    li.innerText = valorInterno
    recebe.append(li)
}



////


localStorage.setItem('nomeDoProduto','li')

const getLocalStoragename = localStorage.getItem('nomeDoProduto')

console.log(getLocalStoragename);










botaoItemJaComprado


const calculadora = document.querySelector("#somarTodosOsProdutos");

function somarValordeTodosOsProdutos(){ 
  

  arraySomaDosProdutos.forEach(nomeDoProduto => {
    soma += parseFloat(nomeDoProduto.preco)
  });

  const resultadoFinalDaSoma = document.querySelector(".resultadoFinalDaSoma")
  valorTotal = 'R$' + soma;
  resultadoFinalDaSoma.innerText=valorTotal;
}