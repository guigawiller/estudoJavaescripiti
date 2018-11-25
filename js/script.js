var db = {
  "herois": [{
      "nome": "Bastion",
      "funcao": "Dano",
      "dificuldade": 1,
      "idade": 30,
      "afiliacao": "nenhuma",
      "nomeVerdadeiro": "Autômato de Cerco E54 dos Laboratórios SST"
    },
    {
      "nome": "D.va",
      "funcao": "Tank",
      "dificuldade": 2,
      "idade": 19,
      "afiliacao": "MEKA (Exército coreano de exo-força móvel)",
      "nomeVerdadeiro": "Hana Song"
    },
    {
      "nome": "Reinhardt",
      "funcao": "Tank",
      "dificuldade": 1,
      "idade": 61,
      "afiliacao": "Overwatch (anteriormente)",
      "nomeVerdadeiro": "Reinhardt Wilhelm"
    },
    {
      "nome": "Genji",
      "funcao": "Dano",
      "dificuldade": 3,
      "idade": 35,
      "afiliacao": "Clã Shimada (anteriormente), Overwatch (anteriormente)",
      "nomeVerdadeiro": "Genji Shimada"
    },
    {
      "nome": "Moira",
      "funcao": "Suporte",
      "dificuldade": 2,
      "idade": 48,
      "afiliacao": "Talon, Blackwatch (anteriormente)",
      "nomeVerdadeiro": "Moira O'Deorain"
    }
  ]
};

// Caso exista no Local Storage, recupera os dados salvos
var overwatch = JSON.parse(localStorage.getItem('overwatch'));
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
    a.innerHTML = "alterar";
    a.onclick = function passarHeroi(i){
      sessionStorage.setItem('hero', JSON.stringify(overwatch.herois[this.id]) );
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

function alterar(){
  var hero = JSON.parse(sessionStorage.getItem('hero'));
  

}
