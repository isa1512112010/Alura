alert('Bem vindo ao jogo do número secreto ^_^');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1

// enquanto chute for diferente do número secreto, o jogo continua
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
   break;
   } else {
    if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);
    } else {
        alert(`O número secreto é menor que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
 alert(`parabéns! Você descobriu o número secreto ^^ (${numeroSecreto}) com apenas ${tentativas} ${palavraTentativas}`);


// if (tentativas == 1) {
   // alert(`parabéns! Você descobriu o número secreto ^^ (${numeroSecreto}) com apenas ${tentativas} tentativa`);
// } else {
   // alert(`parabéns! Você descobriu o número secreto ^^ (${numeroSecreto}) com ${tentativas} tentativas`);
//}