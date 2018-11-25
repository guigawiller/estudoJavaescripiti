var overwatch = {
  "herois": [{
      "nome": "Bastion",
      "funcao": "Dano",
      "dificuldade": 1,
      "idade": 30,
      "base": "nenhuma",
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
// converte JSON em Objeto Javascript
// var overwatch = JSON.parse(textoJSON);

function listar() {
  for (var i = 0; i < overwatch.herois.length; i++) {
    var tr = document.createElement('tr');
    tr.id = "num" + i;

    var th = document.createElement('th');
    th.innerHTML = i+1;

    var nome = document.createElement('td');
    nome.innerHTML = overwatch.herois[i].nome;

    var funcao = document.createElement('td');
    funcao.innerHTML = overwatch.herois[i].funcao;

    var dificuldade = document.createElement('td');
    dificuldade.innerHTML = overwatch.herois[i].dificuldade;

    document.getElementById('resultados').appendChild(tr);
    document.getElementById('num' + i).appendChild(th);
    document.getElementById('num' + i).appendChild(nome);
    document.getElementById('num' + i).appendChild(funcao);
    document.getElementById('num' + i).appendChild(dificuldade);
  }

}
