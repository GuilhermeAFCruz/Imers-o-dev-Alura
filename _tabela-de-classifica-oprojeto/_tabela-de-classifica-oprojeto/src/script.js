const elementoTabela = document.getElementById("tabelaCampeoes");
let listaDeJogadores = [];

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = `
          <tr>
            <td>${player1.nome}</td>
            <td>${player1.vitorias}</td>
            <td>${player1.empates}</td>
            <td>${player1.derrotas}</td>
            <td>${player1.pontos}</td>
            <td><button onClick="adicionarVitoria(player1)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(player1)">Empate</button></td>
            <td><button onClick="adicionarDerrota(player1)">Derrota</button></td>
          </tr>`;
}

function adicionarVitoria(jogador) {
  jogador.vitorias++;
  jogador.pontos += 3;
  exibirNaTela();
}
function adicionarEmpate(jogador) {
  jogador.empates++;
  jogador.pontos += 1;
  exibirNaTela();
}
function adicionarDerrota(jogador) {
  jogador.derrotas++;
  exibirNaTela();
}
