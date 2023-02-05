const elementoTabela = document.getElementById("tabelaCampeoes");
let listaDeJogadores = [];

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaDeJogadores.forEach((jogador, index) => {
    console.log(jogador);
    elementoTabela.innerHTML += `
    <tr>
            <td>${jogador.nome}</td>
            <td><img src="${jogador.imagem}" class="champImg"></td>
            <td>${jogador.vitorias}</td>
            <td>${jogador.derrotas}</td>
            <td>${jogador.abates}</td>
            <td>${jogador.mortes}</td>
            <td>${jogador.assistencias}</td>
            <td><button class="tbButton" onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button class="tbButton" onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button class="tbButton" onClick="adicionarAbate(${index})">Abate</button></td>
            <td><button class="tbButton" onClick="adicionarMorte(${index})">Morte</button></td>
            <td><button class="tbButton" onClick="adicionarAssistencia(${index})">Assist</button></td>
            <td><button class="tbButton" onClick="removerCampeao(${index})">Apagar Champ</button></td>
          </tr>
    `;
  })
         
}

function adicionarCampeao() {
  var nomeNovoCampeao = document.getElementById('campoNomeCampeao').value;
  var imagemCampeao = document.getElementById('campoImagemCampeao').value;
  listaDeJogadores.push({
    nome:nomeNovoCampeao,
    imagem: imagemCampeao,
    vitorias: 0,
    derrotas: 0,
    abates: 0,
    mortes: 0,
    assistencias: 0

  });
  document.getElementById('campoNomeCampeao').value = "";
  document.getElementById('campoImagemCampeao').value = "";
  exibirNaTela()

}

function adicionarVitoria(index) {
  listaDeJogadores[index].vitorias++;
  exibirNaTela();
}
function adicionarDerrota(index) {
  listaDeJogadores[index].derrotas++;
  exibirNaTela();
}
function adicionarAbate(index) {
  listaDeJogadores[index].abates++;
  exibirNaTela();
}
function adicionarMorte(index) {
  listaDeJogadores[index].mortes++;
  exibirNaTela();
}
function adicionarAssistencia(index) {
  listaDeJogadores[index].assistencias++;
  exibirNaTela();
}

function removerCampeao(index){
  listaDeJogadores.splice(index, 1);
  exibirNaTela()
}

function apagarCampeoes(){
  listaDeJogadores = []
  exibirNaTela()
}
