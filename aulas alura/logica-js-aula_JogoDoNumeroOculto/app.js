alert('Bem vindo ao jogo do número secreto ^_^');
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute;
let tentativas = 1

// enquanto chute for diferente do número secreto, o jogo continua
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
    alert(`parabéns! Você descobriu o número secreto ^^ (${numeroSecreto}) com ${tentativas} tentativas`);
   } else {
    if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
    }
    tentativas++;
  }
}
