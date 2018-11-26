var db = {
  "herois": [{
      "nome": "Bastion",
      "funcao": "Dano",
      "dificuldade": 1,
      "idade": 30,
      "afiliacao": "nenhuma",
      "nomeVerdadeiro": "Autômato de Cerco E54 dos Laboratórios SST",
      "imgPerfil": "img/bastion.png"
    },
    {
      "nome": "D.va",
      "funcao": "Tank",
      "dificuldade": 2,
      "idade": 19,
      "afiliacao": "MEKA (Exército coreano de exo-força móvel)",
      "nomeVerdadeiro": "Hana Song",
      "imgPerfil": "img/d.va.png"
    },
    {
      "nome": "Reinhardt",
      "funcao": "Tank",
      "dificuldade": 1,
      "idade": 61,
      "afiliacao": "Overwatch (anteriormente)",
      "nomeVerdadeiro": "Reinhardt Wilhelm",
      "imgPerfil": "img/reinhardt.png"
    },
    {
      "nome": "Genji",
      "funcao": "Dano",
      "dificuldade": 3,
      "idade": 35,
      "afiliacao": "Clã Shimada (anteriormente), Overwatch (anteriormente)",
      "nomeVerdadeiro": "Genji Shimada",
      "imgPerfil": "img/genji.png"
    },
    {
      "nome": "Moira",
      "funcao": "Suporte",
      "dificuldade": 2,
      "idade": 48,
      "afiliacao": "Talon, Blackwatch (anteriormente)",
      "nomeVerdadeiro": "Moira O'Deorain",
      "imgPerfil": "img/moir.png"
    }
  ]
};

var img = ""
// Caso exista no Local Storage, recupera os dados salvos
var overwatch = JSON.parse(sessionStorage.getItem('overwatch'));
if (!overwatch) {
  overwatch = db
};



function listar() {

  for (var i = 0; i < overwatch.herois.length; i++) {

      // cria linha
      var tr = document.createElement('tr');
      tr.id = "num" + i;
      // cria campo de número da linha
      var th = document.createElement('th');
      th.innerHTML = i + 1;
      // cria campo de nome do heroi
      var nome = document.createElement('td');
      nome.innerHTML = overwatch.herois[i].nome;
      // cria campo de função do heroi
      var funcao = document.createElement('td');
      funcao.innerHTML = overwatch.herois[i].funcao;
      // cria campo de dificuldade do heroi
      var dificuldade = document.createElement('td');
      dificuldade.innerHTML = overwatch.herois[i].dificuldade;
      // cria campo para inserir links
      var operacoes = document.createElement('td');
      operacoes.id = "op" + i;
      // cria link de alterar
      var a = document.createElement('a');
      a.id = i;
      a.href = 'alterar.html';
      a.innerHTML = "editar";
      a.onclick = function passarHeroi(i) {
        sessionStorage.setItem('heroid', this.id);
      };
      // cria link de excluir
      var b = document.createElement('a');
      b.href = 'alterar.html';
      b.innerHTML = "alterar";

      document.getElementById('resultados').appendChild(tr);
      document.getElementById('num' + i).appendChild(th);
      document.getElementById('num' + i).appendChild(nome);
      document.getElementById('num' + i).appendChild(funcao);
      document.getElementById('num' + i).appendChild(dificuldade);
      document.getElementById('num' + i).appendChild(operacoes);
      document.getElementById('op' + i).appendChild(a);
    }


}

function editar() {
  var heroid = sessionStorage.getItem('heroid');
  document.getElementById('heroi').innerHTML = overwatch.herois[heroid].nome;
  document.getElementById('nome').value = overwatch.herois[heroid].nome;
  document.getElementById('nomeVerdadeiro').value = overwatch.herois[heroid].nomeVerdadeiro;
  document.getElementById('idade').value = overwatch.herois[heroid].idade;
  document.getElementById('dificuldade').value = overwatch.herois[heroid].dificuldade;
  document.getElementById('funcao').value = overwatch.herois[heroid].funcao;
  document.getElementById('afiliacao').value = overwatch.herois[heroid].afiliacao;
  document.getElementById('imgPage').src = overwatch.herois[heroid].imgPerfil;
}

function alterar() {
  var heroid = sessionStorage.getItem('heroid');
  let camponome = document.getElementById('nome').value;
  let camponomeVerdadeiro = document.getElementById('nomeVerdadeiro').value;
  let campodificuldade = document.getElementById('dificuldade').value;
  let campofuncao = document.getElementById('funcao').value;
  let campoafiliacao = document.getElementById('afiliacao').value;
  let campoidade = document.getElementById('idade').value;
  let newhero = {
    nome: camponome,
    funcao: campofuncao,
    dificuldade: campodificuldade,
    idade: campoidade,
    afiliacao: campoafiliacao,
    nomeVerdadeiro: camponomeVerdadeiro,
    imgPerfil: img
  };
  overwatch.herois[heroid] = newhero;
  sessionStorage.setItem('overwatch', JSON.stringify(overwatch));
  alert("Contato alterado com sucesso");
  window.location = "index.html";
}

function excluir() {
  var heroid = sessionStorage.getItem('heroid');
  // na posição indicada pelo heroid exclui 1 item, bem melhor que o delete,
  // que por sua vez, coloca um null no lugar.
  overwatch.herois.splice(heroid,1);
  sessionStorage.setItem('overwatch', JSON.stringify(overwatch));
  alert("Contato deletado com sucesso");
  window.location = "index.html";
}

function incluir() {
  let camponome = document.getElementById('nome').value;
  let camponomeVerdadeiro = document.getElementById('nomeVerdadeiro').value;
  let campodificuldade = document.getElementById('dificuldade').value;
  let campofuncao = document.getElementById('funcao').value;
  let campoafiliacao = document.getElementById('afiliacao').value;
  let campoidade = document.getElementById('idade').value;
  let newhero = {
    nome: camponome,
    funcao: campofuncao,
    dificuldade: campodificuldade,
    idade: campoidade,
    afiliacao: campoafiliacao,
    nomeVerdadeiro: camponomeVerdadeiro,
    imgPerfil: img
  };
  overwatch.herois.push(newhero);
  sessionStorage.setItem('overwatch', JSON.stringify(overwatch));
  alert("Contato inserido com sucesso");
  window.location = "index.html";
}

function carregaImg() {
    let files = document.getElementById('picField').files;

    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            let imgElement = document.getElementById('imgPage');
            imgElement.src = fr.result;
            img = fr.result;

        }
        fr.readAsDataURL(files[0]);
    }
}
