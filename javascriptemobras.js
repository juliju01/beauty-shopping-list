 // função para somar os produtos já comprados //

 const calculadora = document.querySelector("#somarTodosOsProdutos");
 
 function somarValordeTodosOsProdutos(){ 
   let soma = 0;
 
   arraySomaDosProdutos.forEach(nomeDoProduto) => {
     soma += parseFloat(nomeDoProduto,preco)
   });
 
   const resultadoFinalDaSoma = document.querySelectorAll
   valorTotal = 'R$' + soma; 
 }
  

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
 
