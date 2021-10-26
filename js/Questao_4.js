class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return this.primeiroNome + this.segundoNome;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  validando() {
    if (this.media > 6) {
      return = "Aprovado";
    } else {
      return = "Reprovado";
    }
  }
}

var alunos = new Aluno({ "Lucas", "Silva", 7, 8.2}
                       { "Victor", "Paes", 10, 7} 
                       { "Luana", "Pereira", 5.5, 3.1}
                       { "Pedro", "Souza", 9.5, 10}
                       { "Luis", "Roberto", 2.5, 0})

function percorreArray () {  
  for (var i = 0; i < 6; i++) {
    alert(alunos[i].nomeCompleto() + alunos[i].media() + alunos[i].validando() );
  }
}
percorreArray();