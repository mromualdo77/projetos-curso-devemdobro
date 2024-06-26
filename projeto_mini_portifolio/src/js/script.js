
// passo 1 - dar um jeito de pegar o  elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

//  - passo 2 - dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba =>   {
     aba.addEventListener("click", function() {
          if(aba.classList.contains("selecionado")){
               return;
          }

          selecionarAba(aba)
          mostrarInformacoesDaAba(aba)
     });
});

function selecionarAba(aba) {
     
         //passo 3 - quando usuario  clicar, desmarcar a aba selecionada
         const abaSelecionada = document.querySelector(".aba.selecionado");
         abaSelecionada.classList.remove("selecionado")
         
         //passo 4 - marcar a aba clicada  com selecionado
         aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba) {
     //passo 5 -  esconder o conteúdo anterior
     const informacaoSelecionada = document.querySelector(".informacao.selecionado");
     informacaoSelecionada.classList.remove("selecionado");

     //passo 6 - mostrar o conteudo da aba selecionada
     const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
     const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
     informacaoASerMostrada.classList.add("selecionado")
}